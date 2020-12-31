import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { MEDIA_MS } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { Image } from "cloudinary-react";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            {/* <p>{post.cloudinary.cloudName}</p>
              <p>{post.cloudinary.publicId}</p> */}
            <Image
              cloudName={post.cloudinary.cloudName}
              publicId={post.cloudinary.publicId}
              width="2000"
              height="1000"
              crop="fill"
              gravity="auto"
              fetch_format="auto"
            />
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Portfolio Example with {MEDIA_MS}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                cloudinary={post.cloudinary}
                video={post.video}
                tagline={post.tagline}
                coverImage={post.coverImage}
                date={post.date}
                designer={post.designer}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "tagline",
    "date",
    "video",
    "slug",
    "cloudinary",
    "designer",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

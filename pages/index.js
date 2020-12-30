import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { MEDIA_MS } from "../lib/constants";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  // console.log("heroPost", heroPost)
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Portfolio Example with {MEDIA_MS}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              tagline={heroPost.tagline}
              date={heroPost.date}
              designer={heroPost.designer}
              // publicid={heroPost.cloudinary.publicId}
              // cloudname={heroPost.cloudinary.cloudName}
              cloudinary={heroPost.cloudinary}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "tagline",
    "date",
    "slug",
    "cloudinary",
    "designer",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}

import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";


export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js/Cloudinary Integration with {process.env.mediaMs}</title>
        </Head>
        <Container>
          <Intro />
           {heroPost && (
            <HeroPost
              title={heroPost.title}
              tagline={heroPost.tagline}
              postNumber={heroPost.postNumber}
              designer={heroPost.designer}
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
    "postNumber",
    "slug",
    "cloudinary",
    "designer",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}

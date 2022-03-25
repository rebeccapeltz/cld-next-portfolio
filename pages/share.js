import Container from '../components/container';
import Header from '../components/header';
import Layout from '../components/layout';
import ShareHeader from '../components/share-header'

import dynamic from 'next/dynamic';

const DynamicUploadWidget = dynamic(() => import('../components/uw'), {
  ssr: false,
});
export default function Share() {
  return (
    <Layout>
      <Container>
        <Header />
        <article className='mb-32'>
          <title>Share Images: Upload to Cloudinary</title>
          <meta property='og:image' content={process.env.homeOGImageURL} />
          <ShareHeader/>
          <DynamicUploadWidget cloudname={process.env.explainerVideoPublicId} />

        </article>
      </Container>
   
    </Layout>
  );
}

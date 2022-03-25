import { useRouter } from 'next/router';
import Container from '../components/container';
import Header from '../components/header';
import Layout from '../components/layout';
import { EXPLAINER_VIDEO_CLOUD_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
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
          <meta property='og:image' content={HOME_OG_IMAGE_URL} />
          <ShareHeader/>
          <DynamicUploadWidget cloudname={EXPLAINER_VIDEO_CLOUD_NAME} />

        </article>
      </Container>
   
    </Layout>
  );
}

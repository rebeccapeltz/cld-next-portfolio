import { useRouter } from 'next/router';
import Container from '../components/container';
import Header from '../components/header';
import Layout from '../components/layout';
import { HOME_OG_IMAGE_URL } from '../lib/constants'
import ShareHeader from '../components/share-header'
import UploadWidget from '../components/cld-upload-widget'

export default function Share() {
  const router = useRouter();

  return (
    <Layout>
      <Container>
        <Header />
        <article className='mb-32'>
          <title>Share Images: Upload to Cloudinary</title>
          <meta property='og:image' content={HOME_OG_IMAGE_URL} />
          <ShareHeader/>
          <UploadWidget />
        </article>
      </Container>
   
    </Layout>
  );
}

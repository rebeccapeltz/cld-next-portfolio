import Script from 'next/script';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        id='cld-upload-widget'
        src='https://upload-widget.cloudinary.com/global/all.js'
      />
    </>
  );
}

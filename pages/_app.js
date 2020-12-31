import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />
  <script src="https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.min.js" type="text/javascript"></script>
  <script src="https://unpkg.com/cloudinary-video-player@1.5.1/dist/cld-video-player.min.js" type="text/javascript"></script>
  </>
  )
}

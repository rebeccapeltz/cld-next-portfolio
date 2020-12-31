import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script defer
            src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
            type="text/javascript"
          ></script>
          <script defer
            src="https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js"
            type="text/javascript"
          ></script>
          <script defer
            src="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js"
            type="text/javascript"
          ></script>
        </body>
      </Html>
    );
  }
}

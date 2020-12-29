import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://unpkg.com/cloudinary-video-player@1.5.1/dist/cld-video-player.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.min.js"
            type="text/javascript"
          ></script>
          <script
            src="https://unpkg.com/cloudinary-video-player@1.5.1/dist/cld-video-player.min.js"
            type="text/javascript"
          ></script>
        </body>
      </Html>
    );
  }
}

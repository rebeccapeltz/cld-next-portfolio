import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link href="https://unpkg.com/cloudinary-video-player@1.5.1/dist/cld-video-player.min.css" rel="stylesheet" />
          {/* <link rel="preload" as="script" type="text/javascript" src="https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js" />
        <link rel="preload" as="script" type="text/javascript"  src="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src="https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.min.js" type="text/javascript"></script>
          <script src="https://unpkg.com/cloudinary-video-player@1.5.1/dist/cld-video-player.min.js" type="text/javascript"></script> */}
          {/* <script defer 
            src="node_modules/lodash/lodash.js"
            type="text/javascript"
          ></script>
          <script defer 
            src="node_modules/cloudinary-core/cloudinary-core.js"
            type="text/javascript"
          ></script>
          <script defer 
            src="node_modules/cloudinary-video-player/dist/cld-video-player.min.js"
            type="text/javascript"
          ></script> */}
        </body>
      </Html>
    );
  }
}

require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const options = {
  resource_type: "video",
  eager: [
    {
      format: "mp4",
    },
    {
      format: "webm",
    },
    {
      format: "mp4",
      transformation: [{ video_codec: "h265" }],
    },
    {
      format: "m3u8",
    },
  ],
  type: "upload",
  eager_async: true,
  eager_notification_url:
    "https://webhook.site/0a6a349c-aa0b-4e24-b168-709722890bbb",
};

console.log("ready to run");
cloudinary.uploader
  .explicit("nextjs-portfolio/business-explainer", options)
  .then((result) => {
    console.log(result);
  })
  .then((error) => {
    console.log(error);
  });


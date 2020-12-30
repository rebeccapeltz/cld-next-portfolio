require("dotenv").config();
const cloudinary = require("cloudinary").v2;

function update(publicId) {
  const options = {
    resource_type: "video",
    eager: [
      {
        format: "mp4",
        transformation: [{ duration: "3" }],
      },
      {
        format: "webm",
        transformation: [{ duration: "3" }],
      },
      {
        format: "jpg",
      },
      {
        format: "ogv",
        transformation: [{ duration: "3" }],
      },
    ],
    type: 'upload',
    eager_async: true,
    eager_notification_url:
      "https://webhook.site/0a6a349c-aa0b-4e24-b168-709722890bbb",
  };

  console.log("ready to run");
  cloudinary.uploader
    .explicit(publicId, options)
    .then((result) => {
      console.log(result);
    })
    .then((error) => {
      console.log(error);
    });
}

const publicIds = [
  "nextjs-portfolio/dining-vid",
  "nextjs-portfolio/kitchen-vid",
  "nextjs-portfolio/livingroom-vid",
  "nextjs-portfolio/stairs-vid",
  "nextjs-portfolio/bathroom-vid",
];

publicIds.forEach((publicId) => {
  update(publicId);
});

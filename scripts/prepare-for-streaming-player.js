require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.uploader
  .upload("./scripts/business-explainer.mp4", {
    public_id: "nextjs-portfolio/business-explainer",
    type: "upload",
    overwrite: true,
    invalidate: true,
    resource_type: "video",
    tags: "nextjs-portfolio",
    eager: [
      { raw_transformation: "f_webm,vc_vp9,q_auto/mp4" },
      { raw_transformation: "f_mp4,vc_h265,q_auto/mp4" },
      { raw_transformation: "f_mp4,vc_h264,q_auto/mp4" },
    ],
    eager_async: true,
    eager_notification_url:
      "https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
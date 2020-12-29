import React, { useEffect } from "react";

export default function VideoPlayer({ cloudName, publicId }) {
  useEffect(() => {
    const cld = new cloudinary.Cloudinary({
      cloud_name: cloudName,
      secure: true,
    });
    const videoPlayerInit = () => {
      const player = cld.videoPlayer("vp", {
        controls: true,
        preload: "auto",
        muted: true,
        autoplay: false,
        width: 300,
      });
      player.source(publicId, {
        sourceTypes: ["hls"],
      });
    };
    videoPlayerInit();
  }, []);
  return (
    <div>
      <video id="vp" />
    </div>
  );
}

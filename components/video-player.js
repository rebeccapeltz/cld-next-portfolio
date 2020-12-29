import React, { useEffect } from 'react';

export default function VideoPlayer() {
  useEffect(() => {
    const cld = new cloudinary.Cloudinary({
      cloud_name: "demo",
      secure: true,
    });
    const videoPlayerInit = () => {
      cld.videoPlayer("vp", {
        publicId: "race_road_car",
        controls: true,
        preload: "auto",
        muted: true,
        autoplay: false,
        width: 300,
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

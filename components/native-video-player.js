import "cloudinary-video-player/dist/cld-video-player.min.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { Cloudinary } from "cloudinary-core";
import { useEffect } from "react";

const NativeVideoPlayer = ({ cloudName, publicId }) => {
    debugger
  const cld = new Cloudinary({ cloud_name: cloudName });
  useEffect(() => {
    const videoPlayer = cld.videoPlayer("video-player", {
      muted: true,
      controls: true
    });
    videoPlayer.source(publicId);
  });
  return (
    <div>
      <video className="cld-video-player cld-fluid"  id="video-player" />
    </div>
  );
};
export default NativeVideoPlayer;

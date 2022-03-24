import 'cloudinary-video-player/dist/cld-video-player.min.js';
import 'cloudinary-video-player/dist/cld-video-player.min.css';
import { Cloudinary } from 'cloudinary-core';
import { useEffect } from 'react';

const NativeVideoPlayer = ({ cloudName, publicId }) => {
  const cld = new Cloudinary({ cloud_name: cloudName });
  debugger;
  useEffect(() => {
    const videoPlayer = cld.videoPlayer('video-player', {
      muted: true,
      controls: true,
        width: 300
    //   width: '100%',
    });
    // videoPlayer.source(publicId);
    videoPlayer.source(publicId, {
      sourceTypes: ['hls'],
    });
  });
  return (
    <div>
      {/* <video className='cld-video-player cld-fluid' id='video-player' /> */}
      <video className='cld-video-player' id='video-player' />
    </div>
  );
};
export default NativeVideoPlayer;

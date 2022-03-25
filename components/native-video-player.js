import 'cloudinary-video-player/dist/cld-video-player.min.js';
import 'cloudinary-video-player/dist/cld-video-player.min.css';
import { Cloudinary } from 'cloudinary-core';
import { useEffect,memo } from 'react';

const NativeVideoPlayer = ({ cloudName, publicId }) => {
  const cld = new Cloudinary({ cloud_name: cloudName });
  useEffect(() => {
    const videoPlayer = cld.videoPlayer('video-player', {
      muted: true,
      controls: true,
        // width: 300
      width: '100%',
    });
    videoPlayer.source(publicId, {
      sourceTypes: ['hls'],
    });
  },[])
  return (
    <div className='mb-5 explainer-video-container'>
      <video className='cld-video-player cld-fluid' id='video-player' />
      {/* <video className='cld-video-player' id='video-player' /> */}
    </div>
  );
};
export default memo(NativeVideoPlayer);
// export default NativeVideoPlayer;




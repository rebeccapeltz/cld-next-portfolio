import 'cloudinary-video-player/dist/cld-video-player.min.js';
import 'cloudinary-video-player/dist/cld-video-player.min.css';
import { useEffect, useRef } from 'react';

const NativeVideoPlayer = ({ cloudName, publicId }) => {
  const videoEl = useRef();
  useEffect(() => {
    const videoPlayer = window.cloudinary.videoPlayer(videoEl.current, {
      cloud_name: cloudName,
      muted: true,
      controls: true,
      width: '100%',
    });
    videoPlayer.source(publicId, {
      sourceTypes: ['dash', 'hls', 'mp4'],
    });
  }, []);
  return (
    <div className='mb-5 native-video-container'>
      <video
        className='cld-video-player cld-fluid'
        ref={videoEl}
        id='video-player'
      />
    </div>
  );
};
export default NativeVideoPlayer;

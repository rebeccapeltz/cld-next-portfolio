import 'cloudinary-video-player/dist/cld-video-player.min.js';
import 'cloudinary-video-player/dist/cld-video-player.min.css';
import { useEffect,memo } from 'react';

const NativeVideoPlayer = ({ cloudName, publicId }) => {

  console.log(cloudName, publicId);

  useEffect(() => {

    const videoPlayer = window.cloudinary.videoPlayer('video-player', {
      cloud_name: cloudName,
      muted: true,
      controls: true,
      width: '100%',
    });
    videoPlayer.source(publicId, {
      sourceTypes: ['hls'],
    });
  },[])
  return (
    <div className='mb-5 native-video-container'>
      <video className='cld-video-player cld-fluid' id='video-player' />
    </div>
  );
};
export default memo(NativeVideoPlayer);
// export default NativeVideoPlayer;




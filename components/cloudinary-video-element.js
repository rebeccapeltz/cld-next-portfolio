import React, {useRef} from 'react';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';


const CloudinaryVideoElement = ({ cloudname,publicid,duration }) => {
  const videoEl = useRef();
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudname
    }
  }); 
  const video = cld.video(publicid);
  video.format('auto')
  video.quality('auto')
  // video.duration(duration);
  // video.Qualifiers.TimelinePosition.duaration();
  // Qualifiers -> TimelinePosition -> TimelinePosition -> duration
  console.log("video URL",video.toURL())  
  return (
    <AdvancedVideo cldVid={video} width="100%" ref={videoEl}  controls  />
  );
};
export default CloudinaryVideoElement;

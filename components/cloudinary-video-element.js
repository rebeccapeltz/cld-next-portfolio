import React, { useRef } from 'react';
import { AdvancedVideo } from '@cloudinary/react';
import { CloudinaryVideo } from '@cloudinary/url-gen';
import { trim } from '@cloudinary/url-gen/actions/videoEdit';

const CloudinaryVideoElement = ({ cloudname, publicid, duration }) => {
  const videoEl = useRef();
  const video = new CloudinaryVideo(publicid,{cloudName:cloudname,analytics:false});
  video.videoEdit(trim().duration(duration));
  // console.log("video URL",video.toURL())
  return <AdvancedVideo cldVid={video} width='100%' ref={videoEl} controls />;
};
export default CloudinaryVideoElement;

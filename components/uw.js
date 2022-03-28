import React, {useState} from 'react';
import UploadWidgetButton from './uw-button';
import ShareGallery from '../components/share-gallery';

function UploadWidget() {

  const [key, setKey] = useState(Date.now());

  const uploadOpen = () => {
    console.log('call me!');
    uploadWidget.open();
  };
  const uploadWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.cloudname,
      uploadPreset: process.env.unsignedUploadPreset,
    },
    (error, result) => {
      if (!error && result && result.event === 'success') {
        console.log('Done! Here is the image info: ', result.info);
        //need to refresh gallery
        setKey(Date.now())
      }
    }
  );

  return (
    <div>
       <h4 className="text-center md:text-left text-lg mt-5 mb-5">Use Cloudinary Upload Widget to Upload and share images.</h4>
      <UploadWidgetButton func={uploadOpen} />
      <ShareGallery key={key} />
    </div>
  );
}
export default UploadWidget;

import React from 'react';
import UploadWidgetButton from './uw-button';
import dynamic from 'next/dynamic';

const DynamicGallery = dynamic(() => import('../components/share-gallery'), {
  ssr: false,
});

function UploadWidget({ cloudname }) {
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
      }
    }
  );

  return (
    <div>
       <h4 className="text-center md:text-left text-lg mt-5 mb-5">Use Cloudinary Upload Widget to Upload and share images.</h4>
      <UploadWidgetButton func={uploadOpen} />
      <DynamicGallery />
    </div>
  );
}
export default UploadWidget;

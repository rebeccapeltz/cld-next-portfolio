import React from 'react';
import UploadWidgetButton from './uw-button';

function UploadWidget({ cloudname }) {
  const childFunc = () => {
    console.log('call me!');
    uploadWidget.open()
  };

  const uploadWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'pictures77',
      uploadPreset: 'nextjs-portfolio-preset',
    },
    (error, result) => {
      if (!error && result && result.event === 'success') {
        debugger;
        console.log('Done! Here is the image info: ', result.info);
        document.getElementById('uploaded').src=result.info.secure_url;
      }
    }
  );

  return (
    <div>
      <h3>Using an unsigned preset that posts to a webhook</h3>
      <UploadWidgetButton func={childFunc} />
      <div id='upload-widget'></div>
      <div>
        <img id='uploaded' />
      </div>
    </div>
  );
}
export default UploadWidget;


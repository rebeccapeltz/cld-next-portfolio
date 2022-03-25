import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";


const ShareGalleryItem = ({items}) => {
// debugger
  const cld = new Cloudinary({
    cloud: {
      cloudName: "pictures77"
    }
  });

  const optimizeImage = (publicId)=>{
    const optImage = cld.image(publicId);
    optImage.resize(fill().width(500).height(500).gravity('auto'));
    optImage.quality('auto')
    optImage.format('auto')
    // console.log(optImage.toURL())
    return optImage
  }


  return (
    <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
      <div className='flex flex-wrap -m-1 md:-m-2'>
        {items.resources.map((item) => (
          <div className='flex flex-wrap w-1/3' key={item.public_id}>
            <div className='w-full p-1 md:p-2'>
            <AdvancedImage alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg' cldImg={optimizeImage(item.public_id)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShareGalleryItem;


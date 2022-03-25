import { memo } from 'react';

const ShareGalleryItem = ({items}) => {

  return (
    // <section className='overflow-hidden text-gray-700 '>
    <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
      <div className='flex flex-wrap -m-1 md:-m-2'>
        {items.resources.map((item) => (
          <div className='flex flex-wrap w-1/3' key={item.public_id}>
            <div className='w-full p-1 md:p-2'>
              <img
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={`https://res.cloudinary.com/pictures77/image/upload/${item.public_id}.jpg`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  // </section>
  );
};
// export default memo(ShareGalleryItem);
export default ShareGalleryItem;


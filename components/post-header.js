import Avatar from '../components/avatar';
import PostTitle from '../components/post-title';
import Tagline from '../components/tag-line';
import PostImage from './post-image';

import CloudinaryVideoElement from './cloudinary-video-element'

import dynamic from 'next/dynamic';
const DynamicNativeVideo = dynamic(() => import('./native-video-player'), {
  ssr: false,
});

export default function PostHeader({
  title,
  slug,
  tagline,
  designer,
  video,
  cloudinary,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='hidden md:block md:mb-12'>
        <Avatar
          name={designer.name}
          picture={designer.picture}
          publicid={designer.publicId}
          cloudname={process.env.cloudname}
        />
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <PostImage
          title={title}
          slug={slug}
          publicid={cloudinary.publicId}
          cloudname={process.env.cloudname} 
        />
      </div>

      <div className='max-w-2xl mx-auto'>
        <div className='block md:hidden mb-6'>
          <Avatar
            name={designer.name}
            picture={designer.picture}
            publicid={designer.publicId}
            cloudname={process.env.cloudname}
          />
        </div>
        <div className='mb-6 text-lg'>
          <Tagline tagline={tagline} />
        </div>{' '}
      </div>
    </>
  );
}

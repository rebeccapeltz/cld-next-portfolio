import PostTitle from '../components/post-title';
import Tagline from '../components/tag-line';
import PostImage from './post-image';
import CloudinaryVideoElement from './cloudinary-video-element';
import dynamic from 'next/dynamic';
const DynamicAvatar = dynamic(() => import('./avatar'), {
  ssr: false,
});

export default function PostHeader({
  title,
  slug,
  tagline,
  designer,
  video,
  cloudinary,
  videoPublicId,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='hidden md:block md:mb-12'>
        <DynamicAvatar
          name={designer.name}
          publicid={designer.publicId}
          cloudname={process.env.cloudname}
        />
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <PostImage
          title={title}
          publicid={cloudinary.publicId}
          cloudname={process.env.cloudname}
        />
      </div>

      <div className='max-w-2xl mx-auto'>
        <div className='block md:hidden mb-6'>
          <DynamicAvatar
            name={designer.name}
            publicid={designer.publicId}
            cloudname={process.env.cloudname}
          />
        </div>
        <div className='mb-6 text-2xl text-center'>
          <Tagline tagline={tagline} />
        </div>{' '}
        <div className='cld-video-element'>
          <CloudinaryVideoElement
            cloudname={process.env.cloudname}
            publicid={videoPublicId}
            duration='5'
          />
        </div>
      </div>
    </>
  );
}

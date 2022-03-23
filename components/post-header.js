import Avatar from '../components/avatar';
import PostTitle from '../components/post-title';
import Tagline from '../components/tag-line';
import { Video, Transformation } from 'cloudinary-react';
import CoverImage from './cover-image';

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
          cloudname={designer.cloudName}
        />
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <CoverImage
          title={title}
          slug={slug}
          publicid={cloudinary.publicId}
          cloudname={cloudinary.cloudName} 
        />
      </div>

      <div className='max-w-2xl mx-auto'>
        <div className='block md:hidden mb-6'>
          <Avatar
            name={designer.name}
            picture={designer.picture}
            publicid={designer.publicId}
            cloudname={designer.cloudName}
          />
        </div>
        <div className='mb-6 text-lg'>
          <Tagline tagline={tagline} />
        </div>{' '}
        <div>
          <Video
            controls
            cloudName={cloudinary.cloudName}
            publicId={video}
            secure='true'
          >
            <Transformation duration='3' />
          </Video>
        </div>
      </div>
    </>
  );
}

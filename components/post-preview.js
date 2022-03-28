import Avatar from '../components/avatar';
import CoverImage from './cover-image';
import Link from 'next/link';
import TagLine from '../components/tag-line';

export default function PostPreview({
  tagline,
  cloudinary,
  title,
  coverImage,
  postNumber,
  designer,
  slug,
  excerpt,
}) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage
          title={title}
          slug={slug}
          publicid={cloudinary.publicId}
          cloudname={process.env.cloudname}
        />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link href={`/posts/${slug}`}>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <TagLine tagline={tagline} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
      <Avatar
        name={designer.name}
        picture={designer.picture}
        publicid={designer.publicId}
        cloudname={process.env.cloudname}
      />
    </div>
  );
}

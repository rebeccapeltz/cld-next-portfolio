import cn from 'classnames';
import Link from 'next/link';
import { Image } from 'cloudinary-react';

export default function CoverImage({ title, slug, publicid, cloudname }) {
  const image = (
    <Image
      publicId={publicid}
      cloudName={cloudname}
      width='2000'
      height='550'
      crop='fill'
      gravity='auto'
      fetch_format='auto'
      secure='true'
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

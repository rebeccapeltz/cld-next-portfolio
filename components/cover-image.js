import cn from 'classnames';
import Link from 'next/link';

// Import React SDK and Url Generator

import { AdvancedImage} from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen';

// Import required actions and qualifiers.
import { fill } from '@cloudinary/url-gen/actions/resize';

export default function CoverImage({ title, slug, publicid, cloudname }) {
  const cldImage = new CloudinaryImage(publicid, {
    cloudName: cloudname,
    analytics: false,
  });
  cldImage
    .resize(fill().width(2000).height(550).gravity('auto'))
    .quality('auto')
    .format('auto');

  const image = (
    <AdvancedImage
      cldImg={cldImage}
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

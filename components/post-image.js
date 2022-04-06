import { CloudinaryImage } from '@cloudinary/url-gen';
// Using the Next.js Image component
import Image from 'next/image';

export default function PostImage({ title, publicid, cloudname }) {

  const cldImage = new CloudinaryImage(publicid, {cloudName:cloudname,analytics:false}).toURL();
  return (
    <div className='sm:mx-0'>
      <Image
        src={cldImage}
        alt={title}
        width='800px'
        height='400px'
        layout='responsive'
      />
    </div>
  );
}

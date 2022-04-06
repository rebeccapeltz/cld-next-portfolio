// Import React SDK and Url Generator
import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage } from '@cloudinary/url-gen';

// Import required actions and qualifiers.
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity'; // action
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'; // qualifier

export default function Avatar({ name, publicid, cloudname }) {
  const cldImage = new CloudinaryImage(publicid, {cloudName: cloudname, analytics: false});
  cldImage
    .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))
    .quality('auto')
    .format('auto');

  return (
    <div className='flex items-center'>
      <AdvancedImage
        className='w-12 h-12 rounded-full mr-4'
        cldImg={cldImage}
        alt={name}
      />
      <div className='text-xl font-bold'>{name}</div>
    </div>
  );
}

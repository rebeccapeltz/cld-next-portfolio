import Container from './container';
import Link from 'next/link';
import {
  EXPLAINER_VIDEO_PUBLIC_ID,
  CLOUDINARY_CLOUD_NAME,
} from '../lib/constants';
import VideoPlayer from './video-player';

import dynamic from 'next/dynamic';
const DynamicNativeVideo = dynamic(() => import('./native-video-player'), {
  ssr: false,
});
// const DynamicVideo = dynamic(() => import('./video-player'), {
//   ssr: false,
// });

import {
  faTwitter,
  faDiscord,
  faGithub,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className='bg-accent-1 border-t border-accent-2'>
      <Container>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 '>
          <section className='flex flex-col justify-self-auto items-center lg:pl-4'>
            <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4'>
              Connect with us.
            </h3>
            <div className='flex space-x-4 mb-1 mt-1'>
              <div>
                <FontAwesomeIcon icon={faTwitter} />{' '}
              </div>
              <div>
                {' '}
                <FontAwesomeIcon icon={faReact} />
              </div>
              <div>
                {' '}
                <FontAwesomeIcon icon={faDiscord} />
              </div>
              <div>
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </section>
          <section className='flex flex-col grow justify-center items-center lg:pl-4'>
            <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4'>
              Watch our video.
            </h3>
            <DynamicNativeVideo
              publicId={EXPLAINER_VIDEO_PUBLIC_ID}
              cloudName={CLOUDINARY_CLOUD_NAME}
            />
          </section>
          <section className='flex flex-col justify-center items-center lg:pl-4'>
            <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4'>
              Share with us.
            </h3>
            {/* <Link href={`/share`}>
          <a aria-label={title}>{image}</a>
        </Link> */}

            <div className='text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-1 mt-1'>
              <Link href='/share'>
                <a className='hover:underline'>Upload Images</a>
              </Link>
            </div>

            {/* <div class="text-xl font-bold">Upload Images</div> */}
          </section>
        </div>
      </Container>
    </footer>
  );
}

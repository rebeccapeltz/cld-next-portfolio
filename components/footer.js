import Container from './container';
import {
  EXPLAINER_VIDEO_PUBLIC_ID,
  EXPLAINER_VIDEO_CLOUD_NAME,
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
          <section className='flex flex-col justify-center items-center lg:pl-4'>
            <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4'>
              Watch our video.
            </h3>
          </section>
          <section  className='flex flex-col justify-center items-center lg:pl-4'>
          <div className='flex grow space-x-4'>
            <DynamicNativeVideo
              publicId={EXPLAINER_VIDEO_PUBLIC_ID}
              cloudName={EXPLAINER_VIDEO_CLOUD_NAME}
            />
            {/* <VideoPlayer
              publicId={EXPLAINER_VIDEO_PUBLIC_ID}
              cloudName={EXPLAINER_VIDEO_CLOUD_NAME}
            /> */}
            </div>
          </section>
          <section className='flex flex-col justify-center items-center lg:pl-4'>
            <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4'>
              Connect with us.
            </h3>
            <div className='flex space-x-4'>
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
          <section className='flex flex-col justify-center items-center lg:pl-4'>
            <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4'>
              Share with us.
            </h3>
            </section>
        </div>
      </Container>
    </footer>
  );
}

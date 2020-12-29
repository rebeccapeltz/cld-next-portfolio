import Container from './container'
import { EXAMPLE_PATH,EXPLAINER_VIDEO_PUBLIC_ID,EXPLAINER_VIDEO_CLOUD_NAME } from '../lib/constants'
import VideoPlayer from './video-player'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Watch our video.
          </h3>
          <VideoPlayer publicId={EXPLAINER_VIDEO_PUBLIC_ID} cloudName={EXPLAINER_VIDEO_CLOUD_NAME}/>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.cloudinary.com"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/rebeccapeltz/cld-next-portfolio`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

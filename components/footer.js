import Container from "./container";
import {
  EXPLAINER_VIDEO_PUBLIC_ID,
  EXPLAINER_VIDEO_CLOUD_NAME,
} from "../lib/constants";
import VideoPlayer from "./video-player";

// import { ReactElement } from 'react'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faDiscord,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-row lg:flex-row items-stretch">
          <section className="flex flex-col justify-center items-center lg:pl-4">
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
              Watch our video.
            </h3>
            
          </section>
          <section>
          <VideoPlayer
            publicId={EXPLAINER_VIDEO_PUBLIC_ID}
            cloudName={EXPLAINER_VIDEO_CLOUD_NAME}
          />
          </section>
         
          <section className="flex flex-col justify-center items-center lg:pl-4">
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
              Connect with us.
            </h3>
            <div className="flex space-x-4">
              <div>
                <FontAwesomeIcon icon={faTwitter} />{" "}
              </div>
              <div>
                {" "}
                <FontAwesomeIcon icon={faReact} />
              </div>
              <div>
                {" "}
                <FontAwesomeIcon icon={faDiscord} />
              </div>
              <div>
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </section>
           <section className="flex flex-col justify-center items-center lg:pl-4">
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
              View Source on GitHub
            </a>
          </section>
          
        </div>
      </Container>
    </footer>
  );
}

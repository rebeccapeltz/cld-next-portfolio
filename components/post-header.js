import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import Tagline from "../components/tag-line";
import { Video, Transformation } from "cloudinary-react";

export default function PostHeader({ title, tagline, author, video }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar
          name={author.name}
          picture={author.picture}
          publicid={author.publicId}
          cloudname={author.cloudName}
        />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0"></div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar
            name={author.name}
            picture={author.picture}
            publicid={author.publicId}
            cloudname={author.cloudName}
          />
        </div>
        <div className="mb-6 text-lg">
          <Tagline tagline={tagline} />
        </div>
        <div>
          <Video controls cloudName="picturecloud7" publicId={video}>
            <Transformation duration="3" />
          </Video>
        </div>
      </div>
    </>
  );
}

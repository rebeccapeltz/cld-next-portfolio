import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import TagLine from "../components/tag-line";

export default function PostPreview({
  title,
  tagline,
  coverImage,
  date,
  excerpt,
  cloudinary,
  designer,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          publicid={cloudinary.publicId}
          cloudname={cloudinary.cloudName}
        />

        {/* <CoverImage slug={slug} title={title} src={coverImage} /> */}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <TagLine tagline={tagline} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar
        name={designer.name}
        picture={designer.picture}
        publicid={designer.publicId}
        cloudname={designer.cloudName}
      />
    </div>
  );
}

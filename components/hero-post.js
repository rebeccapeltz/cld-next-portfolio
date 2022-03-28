import Avatar from '../components/avatar'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import TagLine from "./tag-line";


export default function HeroPost({
  title,
  coverImage,
  tagline,
  postNumber,
  designer,
  cloudinary,
  slug,
  excerpt
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          slug={slug}
          publicid={cloudinary.publicId}
          cloudname={process.env.cloudname}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
          <TagLine tagline={tagline} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar
            name={designer.name}
            picture={designer.picture}
            publicid={designer.publicId}
            cloudname={process.env.cloudname}
          />
        </div>
      </div>
    </section>
  )
}
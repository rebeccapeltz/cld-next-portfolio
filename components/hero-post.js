import Link from 'next/link'
import TagLine from "./tag-line";

import dynamic from 'next/dynamic';
const DynamicCoverImage = dynamic(() => import('./cover-image'), {
  ssr: false,
});
const DynamicAvatar = dynamic(() => import('./avatar'), {
  ssr: false,
});

export default function HeroPost({
  title,
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
        <DynamicCoverImage
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
          <DynamicAvatar
            name={designer.name}
            publicid={designer.publicId}
            cloudname={process.env.cloudname}
          />
        </div>
      </div>
    </section>
  )
}
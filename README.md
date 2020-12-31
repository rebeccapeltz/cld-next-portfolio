# A statically generated blog example using Next.js and Markdown

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://next-blog-starter.now.sh/](https://next-blog-starter.now.sh/)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/vercel/next.js/tree/canary/examples/blog-starter)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example blog-starter blog-starter-app
# or
yarn create next-app --example blog-starter blog-starter-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

This blog-starter uses [Tailwind CSS](https://tailwindcss.com). To control the generated stylesheet's filesize, this example uses Tailwind CSS' v1.4 [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.

Code credit
https://github.com/vercel/next.js/tree/canary/examples/blog-starter


Media credits
Photo by Cosmin Paduraru from Pexels
https://www.pexels.com/photo/abstract-antique-architectural-design-architecture-340981/

Photo by Victoria Borodinova from Pexels
https://www.pexels.com/photo/sofa-chairs-in-living-room-1648776/

Photo by Jean van der Meulen from Pexels
https://www.pexels.com/photo/rectangular-white-wooden-table-with-chairs-1457841/

Photo by Dmitry Zvolskiy from Pexels
https://www.pexels.com/photo/chopping-boards-near-oven-under-hood-2062426/

Photo by Terry Magallanes from Pexels
https://www.pexels.com/photo/photo-of-a-bathroom-2988865/

Photo by Tarzine Jackson from Pexels
https://www.pexels.com/photo/woman-wearing-eyeglasses-773371/

Photo by Marcelo Dias from Pexels
https://www.pexels.com/photo/photo-of-girl-wearing-brown-shirt-2104252/

Photo by nappy from Pexels
https://www.pexels.com/photo/grayscale-photography-of-man-wearing-blazer-dress-shirt-and-necktie-935969/

Photo by Wallace Chuck from Pexels
https://www.pexels.com/photo/man-wearing-blue-crew-neck-shirt-2287252/

Photo by Rodolfo Quirós from Pexels
https://www.pexels.com/photo/woman-wearing-round-eyeglasses-1727273/

Video by Sam Jae from Pexels
https://www.pexels.com/video/washing-hands-on-the-bathroom-sink-5942152/

Video by Ketut Subiyanto from Pexels
https://www.pexels.com/video/person-climbing-the-stairs-4804832/

Video by Taryn Elliott from Pexels
https://www.pexels.com/video/a-young-woman-working-at-home-with-a-laptop-4112424/

Video by Curtis Adams from Pexels
https://www.pexels.com/video/interior-design-of-a-modern-home-kitchen-3773488/

Video by cottonbro from Pexels
https://www.pexels.com/video/people-talking-in-kitchen-4781506/


## Problems
Loading video player scripts in body

https://github.com/vercel/next.js/discussions/11007


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12  hero-title">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Interior Design.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated portfolio web site using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {' '}
        <a
          href="https://www.cloudinary.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          {process.env.mediaMs}
        </a>{' '}
        
        .
      </h4>
    </section>
  )
}

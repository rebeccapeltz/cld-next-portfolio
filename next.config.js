module.exports = {
  env: {
    cloudname: 'cloudinary-training',
    unsignedUploadPreset: 'nextjs-portfolio-share',
    examplePath: 'cld-next-portfolio',
    cmsName: 'Markdown',
    mediaMs: 'Cloudinary',
    homeOGImageURL:
      'https://res.cloudinary.com/pictures77/image/upload/nextjs-portfolio/og.jpg',
    explainerVideoPublicId: 'nextjs-portfolio/business-explainer',
  },
  images: {
    domains: ['res.cloudinary.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  }
};

require('dotenv').config()
const cloudinary = require('cloudinary').v2

// create unsigned preset
cloudinary.api
  .create_upload_preset({
    name: 'nextjs-portfolio-preset',
    unsigned: true,
    tags: 'nextjs-portfolio',
    notification_url: 'https://webhook.site/1a0678f1-afc3-4077-8666-e232a5fe8c2d'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error))
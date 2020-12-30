import {Image} from 'cloudinary-react'
export default function Avatar({ name, picture, publicid, cloudname }) {
  return (
    <div className="flex items-center">
      {/* <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} /> */}

      <Image className="w-12 h-12 rounded-full mr-4" alt={name} 
    publicId={publicid}
    cloudName={cloudname}
    width="150"
    height="150"
    crop="fill"
    gravity="auto"
    fetch_format="auto"
    secure="true"
  />
{/* <p>{publicid}, {cloudname}</p> */}
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

import { useEffect, useState, memo } from 'react';
import ShareGalleryItem from './share-gallery-item'
const ShareGallery = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const getSharedItems = async () => {
    try {
      const dataURL = `https://res.cloudinary.com/${process.env.cloudname}/image/list/v${Date.now()}/nextjs-portfolio-share.json`;
      // console.log(dataURL);
      let data = await fetch(dataURL, { method: 'GET' });
      // if nothing shared status will be 404
      if (!data || data.status === 404){
        setItems([])
      } else {
        let json = await data.json();
        setItems(json);
      }
      setIsLoaded(true);
    } catch (err) {
      console.log('Error loading data',err);
      setError(err);
      setItems([]);
      setIsLoaded(false);
    }
  };
  useEffect(() => {
    getSharedItems();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    if (items.length < 1){
      return (
        <section className='overflow-hidden text-gray-700 '>
         No images to share
      </section>
      )
    }
    return (
      <section className='overflow-hidden text-gray-700 '>
        <ShareGalleryItem items={items} cloudname={process.env.cloudname} />
      </section>
    );
  }
};
export default ShareGallery;

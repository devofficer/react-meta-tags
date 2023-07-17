import { Helmet } from 'react-helmet';
import React, { useEffect,useState } from 'react';
import { MetaTags } from 'react-meta-tags';
export const SampleElement = () =>{
  const image = 'https://isb-online-bucket.s3.ap-south-2.amazonaws.com/certificate_course.png';
  const currentURL = window.location.href
  const [imageUrl, setImageUrl] = useState('');
  const [metaTags, setMetaTags] = useState({
    image: imageUrl,
    title: 'My App',
    description: 'Some description.'
  });

  useEffect(() => {
    // Update meta tags dynamically
    updateMetaTags();
  }, [imageUrl]);

  const updateMetaTags = () => {
    // Dynamically set meta tags
    setMetaTags({
      image: imageUrl,
      title: 'Dynamic Image',
      description: 'This image is dynamically generated.'
    });
  };

  const handleImageLoad = () => {
    const imageSrc = 'https://isb-online-bucket.s3.ap-south-2.amazonaws.com/certificate_course.png'; // Replace with the actual image URL
    setImageUrl(imageSrc);
  };
    
  return(
    <>
    <MetaTags>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta property="og:title" content={metaTags.title} />
      <meta property="og:image" content={metaTags.image} />
    </MetaTags>
    <h1>hello sample image app</h1>
    <div>
      <img src={image} alt="Dynamic Image" onLoad={handleImageLoad} />
    </div>
    </>
  )
}

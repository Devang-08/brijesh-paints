import React from 'react';
import image from '../Images/Home.jpg'
const Home = () => {

  let myHomeStyle = {
    height: "83vh",
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }

  return (
    <div style={myHomeStyle} className='d-flex justify-content-center align-items-center flex-column'>
      <h1 className='display-1 text-danger fw-bold p-5' id='name'>Brijesh Paints</h1>
      <p className='h-40 w-50' id='hometext'>Welcome to our Paints Shop, your one-stop destination for all your painting needs! Explore our extensive range of high-quality paint products designed to transform your spaces with vibrant colors and lasting finishes. From premium interior and exterior paints to specialty finishes, primers, and brushes, we have everything you need to unleash your creativity and bring your vision to life. Elevate your painting experience with our trusted and reliable products, and let your imagination flourish with the endless possibilities of color at our Paints Shop.</p>
    </div>
  );
}

export default Home;

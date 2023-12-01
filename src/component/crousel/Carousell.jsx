import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/186a71018df06ce2bea1db55086d32e4',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/63439465f0824c81088e0d8f00c24dd0',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/90b990bd1dc16bba234f5002627f71d3',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/ccb04d7d920acde7e1443bf2032c68cb',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/8639f8e6090b62461b5281e4dad485b4',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/b068edb79fa4711e778f8d7500db5066'
]; 

const Carousell = () => (
  <>
   <div style={{ width: '90%', margin: '15px auto',zIndex:'0' }}>
   
   <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} emulateTouch={true} swipeable={true} showArrows={false} showIndicators={false} centerMode={true} autoPlay={true} interval={5000} stopOnHover={true} swipeScrollTolerance={10} centerSlidePercentage={33.3} useKeyboardArrows={true} transitionTime={500}>
     {images.map((item, i) => (
       <div key={i} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
         <img src={item} alt={`carousel-${i}`} style={{ width: '98%', height: '250px', borderRadius: '8px' }} />
       </div>
     ))}
   </Carousel>
 </div></>
 
);

export default Carousell;

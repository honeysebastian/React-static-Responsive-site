import React, { useEffect } from 'react';
import './Dishes.css'
import specialDishes from '../../assets/restaurant-img36.png.webp'
import dish1 from '../../assets/restaurant-img33.png.webp'
import dish2 from '../../assets/restaurant-img34.png.webp'
import dish3 from '../../assets/restaurant-img35.png.webp'
import AOS from 'aos';


const Dishes = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      // Settings that can be overridden on a per-element basis, by `data-aos-*` attributes:
      offset: 100, // Adjust the offset (in pixels) to start the animation earlier or later.
      delay: 100, // Add delay (in milliseconds) before the animation starts.
      duration: 800, // Set the duration (in milliseconds) of the animation.
      easing: 'ease', // Specify the easing function for the animation.
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    // Clean up function
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className='dishes '>
      <div className='imgDishes mb-5' data-aos="fade-down">
        <img className='img-fluid' src={specialDishes} alt="Special Dishes" />
      </div>
      <div className="dishesImages d-flex flex-wrap align-items-center justify-content-evenly " data-aos="fade-up">
        <div className="dishPlate text-light d-flex flex-column justify-content-center align-items-center mb-5">
          <img className='mb-4 soc' src={dish1} alt="" />
          <h5>PERFECT KENTUCKY</h5>
          <h6>TOMATOES / PARMESAN / BASIL</h6>
          <h6 className='price'>ONLY <br /> $15.00</h6>
        </div>
        <div className="dishPlate text-light d-flex flex-column justify-content-center align-items-center mb-5">
          <img className='mb-4 soc' src={dish2} alt="" />
          <h5>HOT CHICKEN BREAST</h5>
          <h6>OLIVES / PARMESAN / BASIL</h6>
          <h6 className='price'>ONLY <br /> $15.00</h6>
        </div>
        <div className="dishPlate text-light d-flex flex-column justify-content-center align-items-center mb-5">
          <img className='mb-4 soc' src={dish3} alt="" />
          <h5>CHILLY CHEESE STEAK</h5>
          <h6>CHILLI / PARMESAN / BASIL</h6>
          <h6 className='price'>ONLY <br /> $15.00</h6>
        </div>
      </div>

    </div>
  )
}

export default Dishes
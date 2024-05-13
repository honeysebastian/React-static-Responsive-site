import React, { useEffect } from 'react';
import './Brando.css'
import hungry from '../../assets/hungry.png.webp'
import arrow from '../../assets/icone-de-fleche-vers-le-bas-orange.png'
import AOS from 'aos';


const Brando = () => {
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
    <div className='brando container-container' >
      <div className="brando-text" data-aos="zoom-in-down" >
        <img src={hungry} alt="hungry image" />
      </div>
      {/* <a href='#'>
            <button className='btn btn-btn brando-btn' data-aos="zoom-in-down">
                <img className='arrow-image' src={arrow} alt="" />
            </button>
        </a> */}

    </div>
  )
}

export default Brando
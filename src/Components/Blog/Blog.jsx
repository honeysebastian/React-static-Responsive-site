import React, { useEffect } from 'react';
import './Blog.css'
import separator from '../../assets/separator.png.webp'
import card1 from '../../assets/blog-post-img4.jpg.webp'
import card2 from '../../assets/blog-post-img5.jpg.webp'
import card3 from '../../assets/blog-post-img6.jpg.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Blog = () => {
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
    <div className='blog'>
      <h1 className='section-heading text-center text-light' data-aos="fade-down">latest blog</h1>
      <div className='text-center blog-separator'><img src={separator} alt="" /></div>

      <div className="row mt-5 justify-content-evenly">
        <div className="col-lg-3 bg-light text-dark text-center pt-3 me-5 mb-5" data-aos="flip-left">
          <img className='img-fluid mb-4 ' src={card1} alt="blog 1" />
          <p>18 MARCH 2016</p>
          <h5>HOW TO MAKE: BUTTERMILK FRIED CHICKEN WINGS</h5>
          <h1>_</h1>
        </div>
        <div className="col-lg-3  bg-light text-dark text-center pt-3 me-5 mb-5" data-aos="flip-up">
          <img className='img-fluid mb-4 ' src={card2} alt="blog 1" />
          <p>18 MARCH 2016</p>
          <h5>SLOW-COOKED BABY BACK RIBS DINNER PARTY!</h5>
          <h1>_</h1>
        </div>
        <div className="col-lg-3  bg-light text-dark text-center pt-3 me-5 mb-5" data-aos="flip-left">
          <img className='img-fluid mb-4 ' src={card3} alt="blog 1" />
          <p>18 MARCH 2016</p>
          <h5>TOMATO AND EGGLESS PIZZA BREAKFAST FOOD</h5>
          <h1>_</h1>
        </div>
      </div>
    </div>
  )
}

export default Blog
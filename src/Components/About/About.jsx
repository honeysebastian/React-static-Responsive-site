import React, { useEffect } from 'react';
import './About.css'
import aboutimg from '../../assets/restaurant-img4.jpg-removebg-preview.png'
import separator from '../../assets/separator.png.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
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
    <div className='about container-container'>
      <h1 className='section-heading text-center' data-aos="fade-down">discover story</h1>
      <div className='text-center'><img src={separator} alt="" /></div>
      <div className="about-items d-flex row">
        <div className="col-lg-8 col-md-12" data-aos="fade-right">
          <img className='about-img img-fluid' src={aboutimg} alt="About Image" />
        </div>
        <div className="col-lg-4 col-md-12 about-desc" data-aos="fade-left">
          <h6 className='about-h6'>SPECIALITY OF THE HOUSE</h6>
          <h1 className='light-text-gray'>DISCOVER OUR TASTY MEALS</h1>
          {/* <h1 className='line'>_</h1> */}
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
          <button className='btn btn-button'>DISCOVER MENU</button>
        </div>
      </div>

    </div>
  )
}

export default About
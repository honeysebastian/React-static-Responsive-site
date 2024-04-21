import React, { useEffect } from 'react';
import './Footer.css'
import footerlogo from '../../assets/logo-restaurant-footer.png.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
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
    <div className='footer text-light text-center'>
        <h5>CAN'T WAIT TO GET INVOLVED, <br /> CONNECT WITH US NOW!</h5>
        <div className="icons">
            <div className="me-3 social-media color-facebook">
            <i class="fa-brands fa-facebook-f soc"></i>
            </div>
            <div className="me-3 social-media color-twitter">
            <i class="fa-brands fa-x-twitter"></i>
            </div>
            <div className="me-3 social-media color-basketball">
            <i class="fa-solid fa-basketball"></i>
            </div>
            <div className="me-3 social-media color-youtube">
            <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="me-3 social-media color-linkedin">
            <i class="fa-brands fa-linkedin-in"></i>
            </div>

        </div>
        <img className='footer-img mb-2' src={footerlogo} alt="" />
        <p>© 2024 BRANDO IS PROUDLY POWERED BY THEMEZAA.</p>

    </div>
  )
}

export default Footer
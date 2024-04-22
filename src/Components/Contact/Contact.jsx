import React, { useEffect } from 'react';
import './Contact.css'
import separator from '../../assets/separator.png.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
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
        <div className='contact container-container'>
            <h1 className='section-heading text-center' data-aos="fade-down">CONTACT US</h1>
            <div className='text-center'><img src={separator} alt="" /></div>
            <div className='contact-info row'>
                <div className="address col-lg-6" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className="contact-icons">
                        <div className='add-icon'> <i class="fa-solid fa-location-dot"></i></div>
                        <div className='add-desc'>
                            <h5>OUR RESTAURANT</h5>
                            <h6>301 The Greenhouse, Custard Factory,  <br />
                                London, E2 8DY.</h6>
                        </div>
                    </div>
                    <div className="contact-icons">
                        <div className="add-icon"><i class="fa-solid fa-clipboard"></i></div>
                        <div className='add-desc'>
                            <h5>GENERAL ENQUIRIES</h5>
                            <h6 style={{ cursor: 'pointer' }}>sales@domain.com</h6>
                        </div>
                    </div>
                    <div className="contact-icons">
                        <div className="add-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
                        <div className='add-desc'>
                            <h5>CALL US</h5>
                            <h6>+44 (0) 123 456 7890</h6>
                        </div>
                    </div>
                </div>
                <div className="contact-form col-lg-6" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <form>
                        <div className="mb-5">
                            <input type="text" className='form-control border-outline' id="" placeholder='*YOUR NAME' />
                        </div>
                        <div className="mb-5">
                            <input type="text" className='form-control border-outline' id="" placeholder='*YOUR EMAIL' />
                        </div>
                        <div className="mb-5">
                            <select className='form-select border-outline' name="" id="">
                                <option selected>WHAT ARE YOU INTERESTED IN?</option>
                                <option value="1">Banquets & Catering</option>
                                <option value="2">Private Parties</option>
                                <option value="3">Breakfast</option>
                                <option value="4">Lunch</option>
                                <option value="5">Dinner</option>
                                <option value="6">Other</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <textarea type="text" className='form-control border-outline' id="" rows="3" placeholder='YOUR MESSAGE' />
                        </div>
                        <div className="mb-4">
                            <button style={{ fontSize: '1rem' }} className='btn btn-button p-3'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
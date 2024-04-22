import React, { useRef, useEffect } from 'react'
import './Testimony.css'
import separator from '../../assets/separator.png.webp'
import next_icon from '../../assets/next_icon-removebg-preview.png'
import back_icon from '../../assets/back_icon-removebg-preview.png'
import user_1 from '../../assets/restaurant-img37.jpg.webp'
import user_2 from '../../assets/restaurant-img38.jpg.webp'
import user_3 from '../../assets/restaurant-img39.jpg.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimony = () => {
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


    const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;

        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;

        }
        slider.current.style.transform = `translateX(${tx}%)`

    }



    return (
        <div className='Testimony'>
            <h1 className='section-heading text-center' data-aos="fade-down">testimonials</h1>
            <div className='text-center'><img src={separator} alt="" /></div>
            <img src={next_icon} alt="" className='next-btn img-icons' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn img-icons' onClick={slideBackward} />
            <div className="silder">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                    <span>sarah smith</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate perferendis veritatis est libero eius nemo dolorum dolorem quasi minima fugit, modi velit nisi! Cum assumenda debitis ducimus pariatur iste?</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                    <span>sommer christian</span>

                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate perferendis veritatis est libero eius nemo dolorum dolorem quasi minima fugit, modi velit nisi! Cum assumenda debitis ducimus pariatur iste?</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                    <span>Alexdandera davis</span>

                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate perferendis veritatis est libero eius nemo dolorum dolorem quasi minima fugit, modi velit nisi! Cum assumenda debitis ducimus pariatur iste?</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                    <span>sarah smith</span>

                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate perferendis veritatis est libero eius nemo dolorum dolorem quasi minima fugit, modi velit nisi! Cum assumenda debitis ducimus pariatur iste?</p>

                        </div>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Testimony
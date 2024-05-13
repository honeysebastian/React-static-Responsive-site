import React from 'react';
import './Menu.css'
import iconbreakfast from '../../assets/icon-breakfast.png.webp'
import separator from '../../assets/separator.png.webp'
import arrow from '../../assets/icone-de-fleche-vers-le-bas-orange.png'
import AOS from 'aos';



const Menu = () => {

    return (
        <div className='menu'>
            <div className="menu-section-1">
                <div className=" side-div1"></div>
                <div className="bg-light menu-card breakfast-card">
                    <div className="breakfast">
                        <img src={iconbreakfast} alt="" />
                        <h2>BREAKFAST</h2>
                        <p>EVERY DAY 08:00 to 10:00 </p>
                        <img src={separator} alt="" />
                        <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid eaque odio animi inventore Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        {/* <a href='#'>
                            <button className='btn arrow-button'>
                                <img className='arrow-image' src={arrow} alt="" />
                            </button>
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="menu-section-2">
                <div className=" side-div2"></div>
                <div className="bg-light menu-card lunch-card">
                    <div className="breakfast">
                        <img src={iconbreakfast} alt="" />
                        <h2>LUNCH</h2>
                        <p>EVERY DAY 13:00 to 15:00 </p>
                        <img src={separator} alt="" />
                        <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid eaque odio animi inventore Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        {/* <a href='#'>
                            <button className='btn arrow-button'>
                                <img className='arrow-image' src={arrow} alt="" />
                            </button>
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="menu-section-3">
                <div className=" side-div1"></div>
                <div className="bg-light menu-card breakfast-card">
                    <div className="breakfast">
                        <img src={iconbreakfast} alt="" />
                        <h2>DINNER</h2>
                        <p>EVERY DAY 19:00 to 22:00 </p>
                        <img src={separator} alt="" />
                        <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid eaque odio animi inventore Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        {/* <a href='#'>
                            <button className='btn arrow-button'>
                                <img className='arrow-image' src={arrow} alt="" />
                            </button>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
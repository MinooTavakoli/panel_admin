import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-component'>
            <div className='footer-side-ltr'>
                <div className="name-wrapper">
                    Minoo Tavakoli
                </div>
                <div className="about-wrapper">
                    ABOUT US
                </div>
                <div className="blog-wrapper">
                    BLOG
                </div>
            </div>

            <div className='footer-side-rtl'>
                <div className="description-wrapper">
                    © 2022 made with ❤️ made by <span className="description-name">Minoo Tavakoli</span> for a better web.
                </div>
            </div>
        </div>
    )
}

export default Footer
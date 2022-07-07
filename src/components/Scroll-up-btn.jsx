import React, { useState, useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


    const ScrollToTop = () => {
        const [showTopBtn, setShowTopBtn] = useState(false);
        useEffect(() => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 400) {
                    setShowTopBtn(true);
                } else {
                    setShowTopBtn(false);
                }
            });
        }, []);
    return(
        <div>
            {" "}
            {showTopBtn && (<Link smooth spy to="Home"><div className="arrow-container">
            <i id="arrow-up" className="fa-solid fa-arrow-up"></i></div></Link>
            )}{" "}
        </div>
    )
}

export default ScrollToTop;
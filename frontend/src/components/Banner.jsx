import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    useEffect(() => {
        const slides = document.querySelector('.slides');
        const slideImages = slides.querySelectorAll('img');
        setTotalSlides(slideImages.length);

        const showSlide = (index) => {
            setCurrentIndex(index % totalSlides);
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        const nextSlide = () => showSlide(currentIndex + 1);
        const prevSlide = () => showSlide(currentIndex - 1);

        const intervalId = setInterval(nextSlide, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex, totalSlides]);

    const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);

    return (
        <section className="banner">
            <div className="slider">
                <div className="slides">
                    <img src="https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_1280.jpg" alt="Banner 1" />
                    <img src="https://cdn.pixabay.com/photo/2016/07/31/16/30/banner-1559405_1280.jpg" alt="Banner 2" />
                    <img src="https://cdn.pixabay.com/photo/2016/03/07/10/32/color-1241879_1280.jpg" alt="Banner 3" />
                    <img src="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg" alt="Banner 4" />
                    <img src="https://cdn.pixabay.com/photo/2018/06/07/09/01/emotions-3459666_1280.jpg" alt="Banner 5" />


                </div>
                <div className="arrow prev" onClick={prevSlide}>&#10094;</div>
                <div className="arrow next" onClick={nextSlide}>&#10095;</div>
            </div>
        </section>
    );
};

export default Banner;

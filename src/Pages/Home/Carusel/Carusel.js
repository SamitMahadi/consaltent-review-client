import React from 'react';
import img1 from '../../../Assets/carusel img/pexels-shvets-production-7176026.jpg'
import img2 from '../../../Assets/carusel img/pexels-shvets-production-7176286.jpg'
import img3 from '../../../Assets/carusel img/pexels-shvets-production-7176319.jpg'
import img4 from '../../../Assets/carusel img/pexels-kampus-production-8430307.jpg'


const Carusel = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-red-700">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-red-700">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-red-700">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-red-700">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-red-700">❮</a> 
            <a href="#slide4" className="btn btn-circle bg-red-700">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-red-700">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-red-700">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Carusel;
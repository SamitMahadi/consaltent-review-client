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
                <div className="absolute flex justify-between transform -translate-y-1/2  px-40 top-1/4 md: px-0 ">
                    <h1 className='text-6xl font-bold text-white md: text-lg px-6'>Transformation Through Consulting</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2  px-40 top-1/2 text-white">
                    <p className='md: hidden'>The Process Consultant is no longer consulting. I want to thank my many clients for placing their trust and patience in me over the years. If you are looking for professional business process consulting, I recommend you contact the excellent team at Business Enterprise Mapping who were my serious competition and whose work I always admired.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2  top-3/4 left-1/2 text-white">
                    <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-10 rounded  md: p-0 w-2 h-3 ">
                        <h1 className='md: text-sm'>Get More</h1>
                    </button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-red-700 md: ">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />


                <div className="absolute flex justify-between transform -translate-y-1/2  px-40 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>Increase Your Revnue Rapidly</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2  px-40 top-1/2 text-white">
                    <p>The Process Consultant is no longer consulting. I want to thank my many clients for placing their trust and patience in me over the years. If you are looking for professional business process consulting, I recommend you contact the excellent team at Business Enterprise Mapping who were my serious competition and whose work I always admired.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2  top-3/4 left-1/2 text-white">
                    <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-10 rounded">
                        Get More
                    </button>
                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-red-700">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />


                <div className="absolute flex justify-between transform -translate-y-1/2  px-40 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>Helping Small Startups To Grow Up</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2  px-40 top-1/2 text-white">
                    <p>The Process Consultant is no longer consulting. I want to thank my many clients for placing their trust and patience in me over the years. If you are looking for professional business process consulting, I recommend you contact the excellent team at Business Enterprise Mapping who were my serious competition and whose work I always admired.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2  top-3/4 left-1/2 text-white">
                    <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-10 rounded">
                        Get More
                    </button>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-red-700">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2  px-40 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>Only High Quality Ideas</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2  px-40 top-1/2 text-white">
                    <p>The Process Consultant is no longer consulting. I want to thank my many clients for placing their trust and patience in me over the years. If you are looking for professional business process consulting, I recommend you contact the excellent team at Business Enterprise Mapping who were my serious competition and whose work I always admired.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2  top-3/4 left-1/2 text-white">
                    <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-10 rounded">
                        Get More
                    </button>
                </div>
                

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-red-700">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-red-700">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carusel;
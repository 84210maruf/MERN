import React from 'react'

import slider1 from './../../../assets/slide1.jpg'
import slider2 from './../../../assets/slide2.jpg'
import slider3 from './../../../assets/slide3.jpg'
import slider4 from './../../../assets/slide4.jpg'

function Carousel_div() {
    return (
        <div>
            <div className="carousel w-full h-72 md:h-80">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={slider1}
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={slider2}
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={slider3}
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src={slider4}
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-4 pb-2">
                <a href="#item1" className="btn btn-xs bg-sky-100 shadow-md">1</a>
                <a href="#item2" className="btn btn-xs bg-sky-100 shadow-md">2</a>
                <a href="#item3" className="btn btn-xs bg-sky-100 shadow-md">3</a>
                <a href="#item4" className="btn btn-xs bg-sky-100 shadow-mdanimate-pulse">4</a>
            </div>
        </div>
    )
}

export default Carousel_div

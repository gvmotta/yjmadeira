import React, { Component } from "react";
import Slider from "react-slick";
import img from '../../assets/img/carousel-bottom/1.png'
import img2 from '../../assets/img/carousel-bottom/2.png'
import img3 from '../../assets/img/carousel-bottom/3.png'
import img4 from '../../assets/img/carousel-bottom/4.png'
import img5 from '../../assets/img/carousel-bottom/5.png'
import img6 from '../../assets/img/carousel-bottom/6.png'
import img7 from '../../assets/img/carousel-bottom/7.png'
import img8 from '../../assets/img/carousel-bottom/8.png'
import img9 from '../../assets/img/carousel-bottom/9.png'
import img10 from '../../assets/img/carousel-bottom/10.png'
import img11 from '../../assets/img/carousel-bottom/11.png'
import img12 from '../../assets/img/carousel-bottom/12.png'
import img13 from '../../assets/img/carousel-bottom/13.png'
import img14 from '../../assets/img/carousel-bottom/14.png'
import img15 from '../../assets/img/carousel-bottom/15.png'
import img16 from '../../assets/img/carousel-bottom/16.png'
import img17 from '../../assets/img/carousel-bottom/17.png'
import img18 from '../../assets/img/carousel-bottom/18.png'
import img19 from '../../assets/img/carousel-bottom/19.png'
import img20 from '../../assets/img/carousel-bottom/20.png'
import { Qualidade } from "./style";

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Qualidade>
        <Slider {...settings}>
          <div>
            <img src={img} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img5} />
          </div>
          <div>
            <img src={img6} />
          </div>
          <div>
            <img src={img7} />
          </div>
          <div>
            <img src={img8} />
          </div>
          <div>
            <img src={img9} />
          </div>
          <div>
            <img src={img10} />
          </div>
          <div>
            <img src={img11} />
          </div>
          <div>
            <img src={img12} />
          </div>
          <div>
            <img src={img13} />
          </div>
          <div>
            <img src={img14} />
          </div>
          <div>
            <img src={img15} />
          </div>
          <div>
            <img src={img16} />
          </div>
          <div>
            <img src={img17} />
          </div>
          <div>
            <img src={img18} />
          </div>
          <div>
            <img src={img19} />
          </div>
          <div>
            <img src={img20} />
          </div>
        </Slider>
      </Qualidade>
    );
  }
}
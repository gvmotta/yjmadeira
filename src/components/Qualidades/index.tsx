import React, { Component } from "react";
import Slider from "react-slick";
import img from '../../assets/img/carousel/1-copy.jpg'
import { Qualidade } from "./style";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
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
            <img src={img} />
          </div>
          <div>
            <img src={img} />
          </div>
          <div>
            <img src={img} />
          </div>
          <div>
            <img src={img} />
          </div>
          <div>
            <img src={img} />
          </div>
          <div>
            <img src={img} />
          </div>
          <div>
            <img src={img} />
          </div>
        </Slider>
      </Qualidade>
    );
  }
}
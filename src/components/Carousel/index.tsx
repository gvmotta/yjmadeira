import React, { Component } from 'react'
import { CarouselBox } from './styles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SimpleSliderProps, SimpleSliderState } from './types';

export class SimpleSlider extends Component<SimpleSliderProps, SimpleSliderState> {
  state = {
    activeSlide: 0
  };
  slides = []
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1, 
      beforeChange: (current: number, next: number) => this.setState({ activeSlide: next }),
      afterChange: (current: number) => this.setState({ activeSlide: current })
    };  
  return (
    <CarouselBox>
        <Slider {...settings}>
          {this.props.slides.map((slide, index) => (
            <div key={index}>
            {index === this.state.activeSlide && (
              <>
              <div className="text-container">
                  <h4 className="fadeInLeft fadeInLeftText">{slide.textsFadeInLeft}</h4>
                <div className="column">
                  <h4 className="fadeInRight fadeInRightText mb-2">{slide.textsFadeInRightTop}</h4>
                  <h4 className="fadeInRight fadeInRightText">{slide.textsFadeInRightBottom}</h4>
                </div>
              </div>
              <div className="vertical">
                <h4 className='fadeInBottom fadeInBottomText'>{slide.textsFadeInBottom}</h4>
                <button className='fadeInBottom bottomCarousel'>{slide.textButton}</button>
              </div>
              </>
            )}
            <img src={slide.img} alt="" />
          </div>
          ))}
        </Slider>
      </CarouselBox>
  )
  }
}

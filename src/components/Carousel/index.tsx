import React, { Component } from 'react'
import { CarouselBox } from './styles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SimpleSliderProps, SimpleSliderState } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export class SimpleSlider extends Component<SimpleSliderProps, SimpleSliderState> {
  state = {
    activeSlide: 0
  };
  slides = []
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 7000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1, 
      beforeChange: (current: number, next: number) => this.setState({ activeSlide: next }),
      afterChange: (current: number) => this.setState({ activeSlide: current }),
      nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
      prevArrow: <FontAwesomeIcon icon={faChevronLeft} />
    };  
  return (
    <CarouselBox>
        <Slider {...settings}>
          {this.props.slides.map((slide, index) => (
            <div key={index}>
            {index === this.state.activeSlide && (
              <>
              <button type="button" data-role="none" className="slick-arrow slick-next" > Opa</button>
              <button type="button" data-role="none" className="slick-arrow slick-prev" > Opa</button>
              <div className="text-container">
                  <div className="d-flex justify-content-center mb-3">
                    <h4 className="fadeInLeft fadeInLeftText">{slide.textsFadeInLeft}</h4>
                    <div className="d-block">
                      <h4 className="fadeInRight fadeInRightText mb-2">{slide.textsFadeInRightTop}</h4>
                      <h4 className="fadeInRight fadeInRightText">{slide.textsFadeInRightBottom}</h4>
                    </div>
                  </div>
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

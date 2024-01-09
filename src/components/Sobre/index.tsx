import React, { Component } from 'react'
import { Sobre } from './style'
import { baseUrl } from "./config";
import Slider from 'react-slick';
import Photo from '../../assets/img/carousel/1.jpg'
import { SimpleSliderProps } from './types';

export class CenterMode  extends Component<SimpleSliderProps> {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
    <Sobre className='container mb-5 pt-4'>
      <div className='row'>
        <div className='texto col-12 col-md-6 mb-sm-4'>
          <h4>YJ Madeira - Arte em Madeira</h4>
          <h6>Quer móveis de madeira com qualidade?</h6>
          <p>A YJ Madeira é uma empresa de design e fabricação de móveis de madeira artesanal. Fundada em 2022, a empresa tem como objetivo criar móveis únicos e personalizados que combinem beleza, funcionalidade e durabilidade.</p>
          <p>A YJ Madeira oferece uma variedade de móveis, incluindo mesas, cadeiras, sofás, poltronas, camas e armários. Todos os móveis são feitos à mão com madeiras de alta qualidade, como mogno, jacarandá e imbuia.</p>
          <p>Os móveis da YJ Madeira são projetados por um time de designers experientes que estão sempre buscando novas formas de combinar a beleza da madeira com a funcionalidade do design. A empresa também oferece serviços de customização, permitindo que os clientes criem móveis que atendam às suas necessidades específicas.</p>
          <button>Leia mais</button>
        </div>
        <div id='carousel' className="col-12 col-md-6">
          <div className="h-100 opa">
            <Slider {...settings}>
              {this.props.slides.map((slide, index) => (
                <div key={index}>
                  <div>
                    <img className='imgCarousel' src={slide.img} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Sobre>
      
    );
  }
}


import React, { Component } from 'react'
import { Sobre } from './style'
import aboutPhoto from '../../assets/img/carousel/1.jpg';
import Slider from 'react-slick';

export class CenterMode  extends Component {
  render() {
    const settings = {
      customPaging: function() {
        return (
          <a>
            <img src={aboutPhoto} />
          </a>
        );
      },
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
          <h6>Móveis de Forma Artesanal</h6>
          <p>Móveis de Forma Artesanal em SP, com criatividade, emoção e personalidade, o resultado só pode ser deslumbrante.</p>
          <p>É com essa inspiração que são desenvolvidos os projetos da Marcenart, aliando a exclusividade do processo artesanal com o que há de mais moderno em tecnologia. Cada design deve retratar o estilo de vida, a otimização do espaço, a funcionalidade e a beleza, de uma forma exclusiva e encantadora.</p>
          <p>Por isso, a YJ Madeiras trabalha desde 1985 com móveis planejados em SP executados de forma artesanal, fazendo arte na sua mais pura essência. Dormitórios Sob Medida, Cozinhas Sob Medida, Banheiros Sob Medida, Churrasqueiras Sob Medida, Home Office, Salas Sob Medida.</p>
          <button>Leia mais</button>
        </div>
        <div id='carousel' className="col-12 col-md-6">
          <div className="h-100 opa">
            <Slider {...settings}>
              <div>
                <img className='imgCarousel' src={aboutPhoto} alt="" />
              </div>
              <div>
                <img className='imgCarousel' src={aboutPhoto} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </Sobre>
      
    );
  }
}


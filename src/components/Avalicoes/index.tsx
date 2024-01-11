import React, { Component } from 'react'
import { AvaliacoesContainer } from './styles'
import { Linha, TitleSection } from '../../styles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ISlide, ISlideProps } from './types';

export class Avaliacoes extends Component<ISlideProps> {
    avaliacoes = [];
    render() {
        var settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    ;
  return (
    <AvaliacoesContainer>
        <div className="texto">
            <TitleSection variant='white'>Avalições de nossos clientes</TitleSection>
            <Linha />
        </div>
        <div className="slider">
            <Slider {...settings}>
              {this.props.avaliacoes.map((avaliacoes, index) => (
                  <div>
                    <div className="cardContainer">
                        <p>{avaliacoes.texto}</p>
                        <div className="person">
                            <img src={avaliacoes.img} alt="" />
                            <div className="text">
                              <p>{avaliacoes.name}</p>
                              <p>{avaliacoes.city}</p>
                            </div>
                        </div>
                    </div>
                  </div>
              ))}
            </Slider>
        </div>
    </AvaliacoesContainer>
  )
}
}

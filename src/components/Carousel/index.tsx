import React from 'react'
import img from '../../assets/img/carousel/1.jpg'
import { CarouselBox } from './styles';
import 'animate.css';

export const Carousel = () => {
  return (
    <CarouselBox id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-caption text-center text-md-end">
              <h5 className='animate__animated animate__fadeInRightBig'>Alto Padrão</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-caption text-center text-md-end">
              <h5>Second slide label</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-caption text-center text-md-end">
              <h5>Third slide label</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <div className="change-image-button-carousel">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </div>  
              <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <div className="change-image-button-carousel">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </div>
              <span className="visually-hidden">Next</span>
        </button>
      </CarouselBox>
  )
}

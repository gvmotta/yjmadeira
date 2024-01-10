import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SimpleSlider } from './components/Carousel';
import HeaderBox from './components/Header';
import { Ambientes, BottomHero, CardContainer, Qualidades } from './styles';
import { CenterMode  } from './components/Sobre';
import { Card } from './components/Card';
import img from './assets/img/carousel/1-copy.jpg'
import telhadoImg from './assets/img/carousel/2-copy.jpeg'
import deck from './assets/img/card-background.jpg';
import Responsive from './components/Qualidades';

function App() {
  const slides = [
    { img: img, textsFadeInLeft: 'Pergolados', textsFadeInRightTop: 'Alto padrão', textsFadeInRightBottom: 'Sofisticação', textsFadeInBottom: 'Arte em madeira', textButton: 'Conheça' },
    { img: telhadoImg, textsFadeInLeft: 'Telhados', textsFadeInRightTop: 'Qualidade', textsFadeInRightBottom: 'Perfeição', textsFadeInBottom: 'Arte em madeira', textButton: 'Conheça' }
  ]
  const slides2 = [
    { img: img },
    { img: telhadoImg }
  ]
  
  return (
    <>
      <HeaderBox />
      <main>
        <SimpleSlider slides={slides}/>
        <BottomHero>
          <h4>Móveis de forma artesanal</h4>
        </BottomHero>
        <CenterMode slides={slides} />
        <Qualidades>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 mb-lg-5 mb-md-3 mb-sm-3 mb-3 d-block d-lg-flex align-items-lg-center justify-content-lg-center">
              <p>Financiamento em até 48x</p>
              <hr className='d-lg-none' />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 mb-lg-5 mb-md-3 mb-sm-3 mb-3 d-block d-lg-flex align-items-lg-center justify-content-lg-center">
              <p>Garantia de 5 anos p/ defeitos de fabricação</p>
              <hr className='d-lg-none' />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 mb-lg-5 mb-md-3 mb-sm-3 mb-3 d-block d-lg-flex align-items-lg-center justify-content-lg-center">
              <p>5 anos de história</p>
              <hr className='d-lg-none' />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 mb-lg-5 mb-md-3 mb-sm-3 mb-3 d-block d-lg-flex align-items-lg-center justify-content-lg-center">
              <p>Atendimento personalizado</p>
              <hr className='d-lg-none' />
            </div>
          </div>
          <div className="pb-5">
            <Responsive />
          </div>
        </Qualidades>
        <CardContainer>
          <h3 className='d-block my-5'>Por que somos o serviço ideal para você?</h3>
          <div className="row CardContainer">
            <div className="col-md-5 col-12 card-style mb-4 d-flex justify-content-center">
              <div className="card">
                <h5>Personalização:</h5>
                <p>Os móveis planejados são feitos sob medida, o que significa que são criados para atender às necessidades específicas de cada cliente, personalizando cada projeto de acordo com suas preferências e necessidades.</p>
              </div>
            </div>
            <div className="col-md-5 col-12 card-style mb-4 d-flex justify-content-center">
              <div className="card">
                <h5>Valorização do imóvel:</h5>
                <p>Investir em móveis planejados de alta qualidade pode valorizar o imóvel a longo prazo, o que pode ser um incentivo para quem está pensando em vender ou alugar sua propriedade no futuro.</p>
              </div> 
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 col-12 card-style mb-4 d-flex justify-content-center">
              <div className="card">
                <h5>Qualidade:</h5>
                <p>Os móveis planejados são feitos com materiais de alta qualidade e são projetados para durar por muitos anos, o que significa que, a longo prazo, eles podem ser mais econômicos do que os móveis prontos.</p>
              </div>
            </div>
            <div className="col-md-5 col-12 card-style mb-4 d-flex justify-content-center">
              <div className="card">
                <h5>Design exclusivo:</h5>
                <p>Os móveis planejados oferecem um design exclusivo e personalizado que não pode ser encontrado em móveis prontos, o que pode ser um grande atrativo para aqueles que buscam um estilo de decoração único.</p>
              </div>
            </div>
          </div>
        </CardContainer>
        <BottomHero>
          <h4>Alguns Projetos</h4>
        </BottomHero>
        <div className="ambientesContainer mt-3">
          <div className="container">
            <div className="texto">
              <h4>Marcenaria em Jundiaí e região</h4>
              <p>Projetamos móveis planejados para os mais variados segmentos, de sua residência a sua empresa, serviço feito com respeito, compromisso e foco na entrega de planejados de qualidade, acompanhe no nosso portfólio alguns projetos desenvolvidos ao longo de nossa jornada. Bem-vindo!</p>
            </div>
            <Ambientes>
              <div className="row mb-4">
                <div className="col-sm-6 col-md-4 mb-3">
                  <Card title="Pergolados" src={img}/>
                </div>
                <div className="col-sm-6 col-md-4 mb-3">
                  <Card title="Decks" src={deck}/>
                </div>
                <div className="col-sm-6 col-md-4 mb-3">
                  <Card title="Quartos" src={img}/>
                </div>
                <div className="col-sm-6 col-md-4 mb-3">
                  <Card title="Outros" src={img} />
                </div>
                <div className="col-sm-6 col-md-4 mb-3">
                  <Card title="Outros" src={img} />
                </div>
                <div className="col-sm-6 col-md-4 mb-3">
                  <Card title="Outros" src={img} />
                </div>
              </div>
            </Ambientes>
          </div>
        </div>
        
      </main>
    </>
  );
}

export default App;


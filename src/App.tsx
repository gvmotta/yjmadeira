import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SimpleSlider } from './components/Carousel';
import HeaderBox from './components/Header';
import { Ambientes, BottomHero } from './styles';
import { CenterMode  } from './components/Sobre';
import { Card } from './components/Card';
import img from './assets/img/carousel/1.jpg'
import deck from './assets/img/card-background.jpg';

function App() {
  const slides = [
    { img: img, textsFadeInLeft: 'Pergolados', textsFadeInRightTop: 'Alto padrão', textsFadeInRightBottom: 'Sofisticação', textsFadeInBottom: 'Arte em madeira', textButton: 'Conheça' },
    { img: img, textsFadeInLeft: 'Pergolados', textsFadeInRightTop: 'Alto padrão', textsFadeInRightBottom: 'Sofisticação', textsFadeInBottom: 'Arte em madeira', textButton: 'Conheça' }
    
  ]
  return (
    <>
      <HeaderBox />
      <main>
        <SimpleSlider slides={slides}/>
        <BottomHero>
          <h4>Móveis de forma artesanal</h4>
        </BottomHero>
        <CenterMode  />
        <div className="ambientesContainer">
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


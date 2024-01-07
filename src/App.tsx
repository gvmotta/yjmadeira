import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SimpleSlider } from './components/Carousel';
import HeaderBox from './components/Header';
import { Ambientes, BottomHero } from './styles';
import { SobreContainer } from './components/Sobre';
import { Card } from './components/Card';
import img from './assets/img/carousel/1.jpg'

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
        <SobreContainer />
        <div className="ambientesContainer">
          <div className="container">
            <div className="texto">
              <h4>Marcenaria em Jundiaí e região</h4>
              <p>Projetamos móveis planejados para os mais variados segmentos, de sua residência a sua empresa, serviço feito com respeito, compromisso e foco na entrega de planejados de qualidade, acompanhe no nosso portfólio alguns projetos desenvolvidos ao longo de nossa jornada. Bem-vindo!</p>
            </div>
            <Ambientes>
              <div className="row">
                <div className="col-6 mb-4">
                  <Card fontawesome="faToilet" title="Banheiros" content="Gabinetes projetados para banheiros, adaptados ao seu ambiente e madeira de qualidade" />
                </div>
                <div className="col-6 mb-4">
                  <Card fontawesome="faKitchenSet" title="Cozinhas" content="Gabinetes projetados para banheiros, adaptados ao seu ambiente e madeira de qualidade" />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Card fontawesome="faBed" title="Quartos" content="Gabinetes projetados para banheiros, adaptados ao seu ambiente e madeira de qualidade" />
                </div>
                <div className="col-6">
                  <Card fontawesome="faScrewdriverWrench" title="Outros" content="Gabinetes projetados para banheiros, adaptados ao seu ambiente e madeira de qualidade" />
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


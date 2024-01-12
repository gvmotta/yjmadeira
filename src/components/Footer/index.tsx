import React from 'react'
import { FooterBox } from './styles'
import Logo from '../../assets/img/logo_header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { linkFacebook, linkInstagram, linkWhatsapp, telefone } from '../../assets/sizes';
import { LinkBox } from '../../styles';

export const Footer = () => {
  return (
    <FooterBox>
        <div className="container pt-3">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 border-top">
                <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <img src={Logo} alt="" />
                    </a>
                    <p className="text-body-secondary">© 2024 YJ Madeira. Todos Direitos Reservados</p>
                </div>
                <div className="col mb-3" />
                <div className="col mb-3">
                    <h5>Nesta página</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><LinkBox><a href="#" className="nav-link p-0 text-body-secondary">Início</a></LinkBox></li>
                        <li className="nav-item mb-2"><LinkBox><a href="#" className="nav-link p-0 text-body-secondary">Sobre</a></LinkBox></li>
                        <li className="nav-item mb-2"><LinkBox><a href="#" className="nav-link p-0 text-body-secondary">Qualidades</a></LinkBox></li>
                        <li className="nav-item mb-2"><LinkBox><a href="#" className="nav-link p-0 text-body-secondary">Projetos</a></LinkBox></li>
                        <li className="nav-item mb-2"><LinkBox><a href="#" className="nav-link p-0 text-body-secondary">Avaliações</a></LinkBox></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Mapa do site</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><LinkBox><a href="#" className="nav-link p-0 text-body-secondary">Página inicial</a></LinkBox></li>
                        <li className="nav-item mb-2"><LinkBox><a href="#" className="nav-link p-0 text-body-secondary">Sobre</a></LinkBox></li>
                        <li className="nav-item mb-2"><LinkBox><a href="#" className="nav-link p-0 text-body-secondary">Projetos</a></LinkBox></li>
                        <li className="nav-item mb-2"><LinkBox><a href="#" className="nav-link p-0 text-body-secondary">Contato</a></LinkBox></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Redes Sociais</h5>
                    <ul className="nav flex-column redes">
                        <li className="nav-item mb-2">
                            <LinkBox>
                                <a href={linkWhatsapp} className="nav-link p-0 text-body-secondary">
                                <div className="svg">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </div>
                                <p>{telefone}</p>
                                </a>
                            </LinkBox>
                        </li>
                        <li className="nav-item mb-2">
                            <LinkBox>
                                <a href={linkInstagram}className="nav-link p-0 text-body-secondary">
                                <div className="svg">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <p>@yj.madeira</p>
                                </a>
                            </LinkBox>
                        </li>
                        <li className="nav-item mb-2">
                            <LinkBox>
                                <a href={linkFacebook} className="nav-link p-0 text-body-secondary">
                                <div className="svg">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                <p>@yj.madeira</p>
                                </a>
                            </LinkBox>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </FooterBox>
  )
}

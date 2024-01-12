import React from 'react'
import { Header } from './styles'
import Logo from '../../assets/img/logo_header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function HeaderBox() {
  return (
    <Header>
        <div className='upper'>
            <div className="contact">
                <FontAwesomeIcon icon={faWhatsapp} className='whatsapp icon'/>
                <p>(11) 94027-5238</p>
            </div>
            <div className="contact">
                <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                <p>contato@yjmadeira.com.br</p>
            </div>
        </div>
        <div className='bottom'>
            <nav className='navbar navbar-expand-md bg-body-tertiary w-100'>
                <div className="container-fluid">
                    <div className='logo navbar-brand'>
                        <img src={Logo} alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo01">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item text-center text-md-end'>
                                <a className='nav-link' href="#">Início</a>
                            </li>
                            <li className='nav-item text-center text-md-end'>
                                <a className='nav-link' href="#">Sobre</a>
                            </li>
                            <li className='nav-item text-center text-md-end'>
                                <a className='nav-link' href="#">Produtos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </Header>
  )
}


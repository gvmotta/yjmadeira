import React from 'react'
import { Header } from './styles'
import Logo from '../../assets/img/logo_header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { emailLink, linkWhatsapp } from '../../assets/sizes';
import { Link } from '../../styles';

export default function HeaderBox() {
  return (
    <Header>
        <div className='upper'>
            <div className="contact">
                <Link>
                    <a className='nav-item' href={linkWhatsapp}>
                        <FontAwesomeIcon icon={faWhatsapp} className='whatsapp icon'/>
                        <p>(11) 94027-5238</p>
                    </a>
                </Link>
            </div>
            <div className="contact">
                <Link>
                    <a href={emailLink} className="nav-item">
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                        <p>contato@yjmadeira.com.br</p>
                    </a>
                </Link>
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
                                <Link>
                                    <a className='nav-link' href="#">Início</a>
                                </Link>
                            </li>
                            <li className='nav-item text-center text-md-end'>
                                <Link><a className='nav-link' href="#">Sobre</a></Link>
                            </li>
                            <li className='nav-item text-center text-md-end'>
                                <Link><a className='nav-link' href="#">Projetos</a></Link>
                            </li>
                            <li className='nav-item text-center text-md-end'>
                                <Link><a className='nav-link' href="#">Contato</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </Header>
  )
}


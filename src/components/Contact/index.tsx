import React, { useState } from 'react';
import { FormContainer } from './styles';
import { IForm } from './types';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { Linha, LinkBox, TitleSection } from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faIdCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import { calltoLink, emailLink, linkWhatsapp } from '../../assets/sizes';

const phoneRegExp = /^(\([0-9]{2}\))\s(9?[0-9]{4})-(\d{4})$/;

const schema = yup.object().shape({
    nome: yup.string().required("Required").max(20, "Número máximo de caracteres excedido").min(2, "Número mínimo de caracteres não atingido"),
    email: yup.string().required("Digite um e-mail").email("Digite um e-mail válido"),
    cellphone: yup.string().matches(phoneRegExp, "Número de telefone não válido").required("Digite um número de telefone"),
    mensagem: yup.string().required("Digite alguma mensagem").min(8, "Número de palavras mínimo não atingido").max(1000, "Número de palavras máximas atingidas")
})

export const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IForm>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log({data});
  }

  const [phone, setPhone] = useState('');

  const handleChange = (event: any) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
        value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
    }
    if (value.length > 9) {
        value = value.slice(0, 10) + '-' + value.slice(10);
    }
    setPhone(value);
  };

  return (
    <FormContainer>
        <div className="text px-4">
            <TitleSection>Entre em contato com a gente</TitleSection>
            <Linha variant='orangePrincipal'/>
        </div>
        <div className="row m-0 mt-5 pb-5 container m-auto">
            <div className="col-12 col-sm-12 col-md-6">
                <div className="background">
                    <p>Solicite a visita de um de nossos colaboradores</p>
                    <h3>Atendimento <span>especializado</span></h3>
                    <p className='pb-2'>Enviamos a você um especialista de confiança para analisar os ambientes, tirar todas as medidas necessárias, sanar as dúvidas e entregar um orçamento compatível com suas necessidades.</p>
                    <h6 className='pb-2'>Caso tenha a planta do local, pode nos enviar <a href="#">clicando aqui.</a></h6>
                    <div className="d-flex contact-header">
                        <div className="svg">
                            <FontAwesomeIcon icon={faIdCard} />
                        </div>
                        <h4>Contato</h4>
                    </div>
                    <LinkBox>
                        <a className='link' href={linkWhatsapp}>
                            <div className="contact d-flex">
                                <div className="whatsapp svg">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </div>
                                <p>(11) 94027-5238</p>
                            </div>
                        </a>
                    </LinkBox>
                    <LinkBox>
                        <a href={calltoLink} className="link">
                            <div className="contact d-flex">
                                <div className="svg">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <p>(11) 94027-5238</p>
                            </div>
                        </a>
                    </LinkBox>   
                    <LinkBox>
                        <a href={emailLink} className="link">
                            <div className="contact d-flex">
                                <div className="svg">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <p>contato@yjmadeira.com.br</p>
                            </div>
                        </a>
                    </LinkBox>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12 my-3">
                        <label>Nome:</label>
                        <input className='form-control' {...register("nome")} placeholder='Nome'/>
                        <span>{errors.nome?.message}</span>
                    </div>

                    <div className="col-12 my-2">
                        <label>E-mail:</label>
                        <input className='form-control' {...register("email")} placeholder='email@email.com'/>
                        <span>{errors.email?.message}</span>
                    </div>

                    <div className="col-12 my-2">
                        <label>Número de telefone:</label>
                        <input className='form-control' {...register("cellphone")} value={phone} onChange={handleChange} placeholder='(xx)xxxxx-xxxx' />
                        <span>{errors.cellphone?.message}</span>
                    </div>

                    <div className="col-12 my-2">
                        <label>Mensagem</label>
                        <textarea className='form-control' {...register("mensagem")} placeholder='Gostaria de saber mais sobre...' />
                        <span>{errors.mensagem?.message}</span>
                    </div>

                    <input type='submit' />
                </form>
            </div>
        </div>
    </FormContainer>
  )
}

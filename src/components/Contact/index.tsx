import React, { useState } from 'react';
import { FormContainer } from './styles';
import { IForm } from './types';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { Linha, TitleSection } from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

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
        <TitleSection>Entre em contato com a gente</TitleSection>
        <Linha variant='orangePrincipal'/>
        <div className="row m-0 mt-5 pb-5">
            <div className="col-12 col-sm-12 col-md-6">
                <div className="background container">
                    <p>Solicite a visita de um de nossos colaboradores</p>
                    <h3>Atendimento <span>especializado</span></h3>
                    <p>Enviamos a você um especialista de confiança para analisar os ambientes, tirar todas as medidas necessárias, sanar as dúvidas e entregar um orçamento compatível com suas necessidades.</p>
                    <h6>Caso tenha a planta do local, pode nos enviar <a href="#">clicando aqui.</a></h6>
                    <div className="contact d-flex">
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <p>(11) 94027-5238</p>
                    </div>
                    <div className="contact d-flex">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>(11) 94027-5238</p>
                    </div>     
                    <div className="contact d-flex">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>contato@yjmadeira.com.br</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12 my-3">
                        <label>Nome:</label>
                        <input {...register("nome")} placeholder='Nome'/>
                        <span>{errors.nome?.message}</span>
                    </div>

                    <div className="col-12 my-2">
                        <label>E-mail:</label>
                        <input {...register("email")} placeholder='email@email.com'/>
                        <span>{errors.email?.message}</span>
                    </div>

                    <div className="col-12 my-2">
                        <label>Número de telefone:</label>
                        <input {...register("cellphone")} value={phone} onChange={handleChange} placeholder='(xx)xxxxx-xxxx' />
                        <span>{errors.cellphone?.message}</span>
                    </div>

                    <div className="col-12 my-2">
                        <label>Mensagem</label>
                        <textarea {...register("mensagem")} placeholder='Gostaria de saber mais sobre...' />
                        <span>{errors.mensagem?.message}</span>
                    </div>

                    <input type='submit' />
                </form>
            </div>
        </div>
    </FormContainer>
  )
}

import React from 'react';
import { FormContainer } from './styles';
import { IForm } from './types';
import { useForm, SubmitHandler } from "react-hook-form";

export const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = data => console.log(data);

  return (
    <FormContainer>
        <div className="row m-0">
            <div className="col-6">

            </div>
            <div className="col-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12">
                        <label>Primeiro nome:</label>
                        <input {...register("primeiroNome", { required: true, maxLength: 20 })} />
                        {errors.primeiroNome && <span>This field is required</span>}
                    </div>

                    <div className="col-12">
                        <label>Cidade:</label>
                        <input {...register("cidade", { required: true, pattern: /^[A-Za-z]+$/i })} />
                        {errors.cidade && <span>This field is required</span>}
                    </div>

                    <div className="col-12">
                        <label>Número de telefone:</label>
                        <input {...register("cellphone", {min: 9, max: 99})} />
                        {errors.cellphone && <span>This field is required</span>}
                    </div>

                    <input type='submit' />
                </form>
            </div>
        </div>
    </FormContainer>
  )
}

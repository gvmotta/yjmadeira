import React from 'react'
import { ICard } from './types'
import { CardContainer } from './styles'


export const Card = ({title, src}: ICard) => {
  return (
    <CardContainer>
      <div className="cards">
        <img src={src} alt="" />
        <h5 className=''>{title}</h5>
      </div>
    </CardContainer>
  )
}

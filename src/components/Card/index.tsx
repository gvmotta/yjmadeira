import React from 'react'
import { ICard } from './types'
import { CardContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const Card = ({title, src}: ICard) => {
  return (
    <CardContainer>
      <div className="cards">
        <img src={src} alt="" />
        <div className="content">
          <h5 className=''>{title}</h5>
          <div className="svg">
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </div>
        </div>
      </div>
    </CardContainer>
  )
}

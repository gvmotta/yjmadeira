import React from 'react'
import { ICard } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faKitchenSet, faToilet, faBed, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { CardContainer } from './styles'

const iconMap: { [key: string]: IconDefinition } = {
    faToilet,
    faKitchenSet, 
    faBed,
    faScrewdriverWrench
}

export const Card: React.FC<ICard> =({fontawesome, title, content}) => {
const selectedIcon = iconMap[fontawesome];
  return (
    <CardContainer>
        <div className="icon">
            {selectedIcon && <FontAwesomeIcon icon={selectedIcon} />}
        </div>
        <div className="card-text">
            <h5>{title}</h5>
            <p>{content}</p>
        </div>
    </CardContainer>
  )
}

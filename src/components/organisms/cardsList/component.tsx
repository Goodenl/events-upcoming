import React, { FC } from 'react';
import Card, { ICard } from '../../molecules/cards/component';
import styled from './style.module.scss';

const CardsList: FC<ICardsList> = ({
    cards,
    className,
}) => (
  <ul className={`${styled.cardsList} ${className}`}>
    {cards.map((card) => (
      <Card
        key={card.title}
        title={card.title}
        subtitle={card.subtitle}
        previewSrc={card.previewSrc}
        logoSrc={card.logoSrc}
      />
    ))}
  </ul>
);

interface ICardsList {
    cards: ICard[]
    className?: string
}

CardsList.defaultProps = {
    className: '',
};

export default CardsList;

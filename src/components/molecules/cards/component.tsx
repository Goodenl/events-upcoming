import React, { FC } from 'react';
import styled from './style.module.scss';

const Card: FC<ICard> = ({
    title,
    subtitle,
    previewSrc,
    logoSrc,
    className,
}) => (
  <li className={`${styled.card} ${className}`}>
    <div className={`${styled.card__preview}`}>
      <picture>
        <source srcSet="" />
        <img src={previewSrc} alt="Preview" />
      </picture>
    </div>
    <img src={logoSrc} alt="Logo" className={`${styled.card__logo}`} />
    <div className={`${styled.card__info}`}>
      <span className={`${styled.card__subtitle}`}>{subtitle}</span>
      <h4 className={`${styled.card__title}`}>{title}</h4>
    </div>
  </li>
);

export interface ICard {
    title: string
    subtitle: string
    previewSrc: string
    logoSrc: string
    className?: string
}

// Card.defaultProps = {
//     className: '',
// };

export default Card;

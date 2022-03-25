import React, { FC } from 'react';
import styled from './style.module.scss';

import Button from '../../atoms/buttons/component';
import CardsList from '../../organisms/cardsList/component';
import { ICard } from '../../molecules/cards/component';

const EventsUpcoming: FC<IEventsUpcoming> = ({
    cards,
    className,
}) => (
  <>
    <section className={`${styled.container} ${styled.eventsUpcoming} ${className}`}>
      <CardsList cards={cards} />
      <Button className="ml-5-vw">Load more</Button>
    </section>
  </>
);

interface IEventsUpcoming {
    cards: ICard[]
    className?: string
}

EventsUpcoming.defaultProps = {
    className: '',
};

export default EventsUpcoming;

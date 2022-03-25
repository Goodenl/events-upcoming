import React, { FC } from 'react';
import EventsUpcomings from '../templates/EventsUpcomings/component';
import { ICard } from '../molecules/cards/component';

// some api magic
const cardsList: ICard[] = [
  { title: 'Summer1 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer2 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-1.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer3 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-2.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer4 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-3.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer5 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-4.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer6 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-5.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer7 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-6.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer8 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-7.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer9 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-8.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer10 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-9.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer11 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-10.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer12 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-11.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer13 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-12.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer14 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-13.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer15 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-14.jpg', logoSrc: '/assets/images/cardLogo.png' },
  { title: 'Summer16 collection', subtitle: 'super sale', previewSrc: '/assets/images/slate-15.jpg', logoSrc: '/assets/images/cardLogo.png' },
];
// some api magic end

const MainPage: FC = () => (
  <EventsUpcomings cards={cardsList} />
);

export default MainPage;

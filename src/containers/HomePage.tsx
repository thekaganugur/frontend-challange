import React, { FC } from 'react';
import RenderCards from '../components/RenderCards';

interface HomeProps {}

const HomePage: FC<HomeProps> = (props: HomeProps) => {
  return (
    <RenderCards
      cards={[
        { to: '/series', title: 'Popular Series', bigText: 'SERIES' },
        { to: '/movies', title: 'Popular Movies', bigText: 'MOVIES' },
      ]}
    />
  );
};

export default HomePage;

import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import RenderCards from '../components/RenderCards';

interface HomeProps {}

const HomePage: FC<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <Helmet title="Popular Titles" />
      <RenderCards
        cards={[
          { to: '/series', title: 'Popular Series', bigText: 'SERIES' },
          { to: '/movies', title: 'Popular Movies', bigText: 'MOVIES' },
        ]}
      />
    </>
  );
};

export default HomePage;

import React, { FC } from 'react';
import Card from '../components/Card';

interface HomeProps {}

const Home: FC<HomeProps> = (props: HomeProps) => {
  return (
    <div>
      <Card>Series</Card>
      <Card>Movies</Card>
    </div>
  );
};

export default Home;

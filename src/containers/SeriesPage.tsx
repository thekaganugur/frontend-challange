import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import RenderCards from '../components/RenderCards';
import Select from '../components/Select';
import { Flex } from '../styled/styledUtils';
import { getData } from '../services/services';
import { Entries } from '../models';

interface SeriesPageProps {}

const SearchFilterWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const SeriesPage: FC<SeriesPageProps> = (props: SeriesPageProps) => {
  const [state, setState] = useState<Entries[]>();

  useEffect(() => {
    getData('series').then((entries) => {
      setState(entries);
    });
  }, []);

  const entriesToCardsArr = (entries?: Entries[]) =>
    entries?.map(({ title, images }) => ({
      title,
      image: images['Poster Art'].url,
    }));

  return (
    <div>
      <SearchFilterWraper>
        <Flex>
          <Input placeholder="Search..." />
          <Button></Button>
        </Flex>
        <Select
          options={[
            { label: 'a', value: 'a' },
            { label: 'b', value: 'b' },
          ]}
        ></Select>
      </SearchFilterWraper>

      <RenderCards cards={entriesToCardsArr(state)} />
    </div>
  );
};

export default SeriesPage;

import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import RenderCards from '../components/RenderCards';
import Select from '../components/Select';
import { Flex } from '../styled/styledUtils';
import { Helmet } from 'react-helmet';
import { Entries } from '../models';
import { getData } from '../services/services';
import {
  entriesToCardsArr,
  filterEntries,
  handleRelatedSort,
  SearchFilterWraper,
  Sort,
  sortArr,
} from './SeriesPage';

interface MoviesPageProps {}

const initEntries: Entries[] = [
  {
    description: '',
    images: { 'Poster Art': { height: 0, url: '', width: 0 } },
    programType: 'movie',
    releaseYear: 0,
    title: '',
  },
];
interface Form {
  filter: string;
  sort: Sort;
}

const initForm: Form = {
  filter: '',
  sort: '',
};

const MoviesPage: FC<MoviesPageProps> = (props: MoviesPageProps) => {
  const [state, setState] = useState<Entries[]>(initEntries);
  const [form, setForm] = useState<Form>(initForm);

  const handleChange = ({ target }: ChangeEvent<any>) => {
    setForm({ ...form, [target.name]: target.value });
  };

  useEffect(() => {
    getData('movie').then(setState);
  }, []);

  return (
    <div>
      <Helmet title="Popular Movies" />
      <SearchFilterWraper>
        <div className="search-wraper">
          <Input
            name="filter"
            value={form.filter}
            onChange={handleChange}
            placeholder="Search..."
          />
        </div>
        <Select
          name="sort"
          value={form.sort}
          onChange={handleChange}
          options={sortArr}
        />
      </SearchFilterWraper>

      <RenderCards
        cards={entriesToCardsArr(
          handleRelatedSort(filterEntries(state, form.filter), form.sort)
        )}
        spaceBetween
      />
    </div>
  );
};

export default MoviesPage;

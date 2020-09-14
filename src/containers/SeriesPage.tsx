import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import RenderCards from '../components/RenderCards';
import Select from '../components/Select';
import { Flex } from '../styled/styledUtils';
import { getData } from '../services/services';
import { Entries } from '../models';
import { Helmet } from 'react-helmet';
import { device } from '../styled/breakpoints';

export const SearchFilterWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  .search-wraper {
    display: flex;
  }

  @media ${device.smDown} {
    flex-direction: column;
    align-items: center;

    .search-wraper {
      width: 100%;
      margin-bottom: 1rem;
    }

    .styled-input,
    .styled-select {
      width: 100%;
    }
  }
`;

interface SeriesPageProps {}

interface Form {
  filter: string;
  sort: Sort;
}

export type Sort = '' | 'yearDesc' | 'yearAsc' | 'titleDesc' | 'titleAsc';

export const sortArr: { value: Sort; label: string }[] = [
  { value: '', label: 'None' },
  { value: 'yearDesc', label: 'Sort by year in descending order' },
  { value: 'yearAsc', label: 'Sort by year in ascending order' },
  { value: 'titleDesc', label: 'Sort by title in descending order (A-Z)' },
  { value: 'titleAsc', label: 'Sort by title in ascending order (Z-A)' },
];

const sortYearDesc = (entries?: Entries[]) =>
  entries?.sort((a, b) => b.releaseYear - a.releaseYear);
const sortYearAsc = (entries?: Entries[]) =>
  entries?.sort((a, b) => a.releaseYear - b.releaseYear);
const sortTitleDesc = (entries?: Entries[]) =>
  entries?.sort((a, b) => a.title.localeCompare(b.title));
const sortTitleAsc = (entries?: Entries[]) =>
  entries?.sort((a, b) => b.title.localeCompare(a.title));
export const handleRelatedSort = (entries: Entries[], sortType: Sort) => {
  switch (sortType) {
    case 'yearDesc':
      return sortYearDesc(entries);
    case 'yearAsc':
      return sortYearAsc(entries);
    case 'titleDesc':
      return sortTitleDesc(entries);
    case 'titleAsc':
      return sortTitleAsc(entries);
    default:
      return entries;
  }
};

const initEntries: Entries[] = [
  {
    description: '',
    images: { 'Poster Art': { height: 0, url: '', width: 0 } },
    programType: 'movie',
    releaseYear: 0,
    title: '',
  },
];
const initForm: Form = {
  filter: '',
  sort: '',
};

export const filterEntries = (entries: Entries[], str: string) =>
  str.length > 2
    ? entries.filter(({ title }) =>
        title.toLowerCase().includes(str.toLowerCase())
      )
    : entries;
export const entriesToCardsArr = (entries?: Entries[]) =>
  entries?.map(({ title, images }) => ({
    title,
    image: images['Poster Art'].url,
  }));

const SeriesPage: FC<SeriesPageProps> = (props: SeriesPageProps) => {
  const [state, setState] = useState<Entries[]>(initEntries);
  const [form, setForm] = useState<Form>(initForm);

  const handleChange = ({ target }: ChangeEvent<any>) => {
    setForm({ ...form, [target.name]: target.value });
  };

  useEffect(() => {
    getData('series').then(setState);
  }, []);

  return (
    <div>
      <Helmet title="Popular Series" />
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

export default SeriesPage;

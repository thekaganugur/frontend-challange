import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Input from '../components/Input';
import RenderCards from '../components/RenderCards';
import Select from '../components/Select';
import { fetchComments } from '../features/series/seriesSlice';
import { Sort } from '../models';
import { SearchFilterWraper } from '../styled/SearchFilterWraper';
import {
  entriesToCardsArr,
  filterEntries,
  handleRelatedSort,
  sortArr,
} from '../utils';

interface SeriesPageProps {}
interface Form {
  filter: string;
  sort: Sort;
}

const initForm: Form = {
  filter: '',
  sort: '',
};

const SeriesPage: FC<SeriesPageProps> = (props: SeriesPageProps) => {
  const [form, setForm] = useState<Form>(initForm);
  const dispatch = useDispatch();

  const seriesState = useSelector((state: RootState) => state.series);

  useEffect(() => {
    if (seriesState.series.length === 1 && !seriesState.series[0].title) {
      dispatch(fetchComments('series'));
    }
  }, [seriesState, dispatch]);

  const handleChange = ({ target }: ChangeEvent<any>) => {
    setForm({ ...form, [target.name]: target.value });
  };

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
          handleRelatedSort(
            filterEntries(seriesState.series, form.filter),
            form.sort
          )
        )}
        spaceBetween
      />
    </div>
  );
};

export default SeriesPage;

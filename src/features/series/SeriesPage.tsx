import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Input from '../../components/Input';
import RenderCards from '../../components/RenderCards';
import Select from '../../components/Select';
import { Form } from '../../models';
import { SearchFilterWraper } from '../../styled/SearchFilterWraper';
import {
  getCardsReadyFilteredSortedArray,
  renderContentConditionally,
  sortArr,
} from '../../utils';
import { fetchSeries } from './seriesSlice';

const initForm: Form = {
  filter: '',
  sort: '',
};

const SeriesPage: FC = () => {
  const [form, setForm] = useState<Form>(initForm);
  const dispatch = useDispatch();

  const seriesState = useSelector((state: RootState) => state.series);
  const { loading, error, series } = seriesState;

  useEffect(() => {
    if (series.length === 1 && !series[0].title) {
      dispatch(fetchSeries());
    }
  }, [series, dispatch]);

  const handleChange = ({ target }: ChangeEvent<any>) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const renderedForm = (
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
  );

  const content = (
    <>
      {renderedForm}
      <RenderCards
        cards={getCardsReadyFilteredSortedArray(series, form)}
        spaceBetween
      />
    </>
  );

  return (
    <div>
      <Helmet title="Popular Series" />
      {renderContentConditionally(loading, error, content)}
    </div>
  );
};

export default SeriesPage;

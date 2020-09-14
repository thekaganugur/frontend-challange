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
import { fetchMovies } from './moviesSlice';

const initForm: Form = {
  filter: '',
  sort: '',
};

const MoviesPage: FC = () => {
  const [form, setForm] = useState<Form>(initForm);

  const dispatch = useDispatch();
  const moviesState = useSelector((state: RootState) => state.movies);
  const { loading, movies, error } = moviesState;

  useEffect(() => {
    if (movies.length === 1 && !movies[0].title) {
      dispatch(fetchMovies());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const renderedContent = (
    <>
      {renderedForm}
      <RenderCards
        cards={getCardsReadyFilteredSortedArray(movies, form)}
        spaceBetween
      />
    </>
  );

  return (
    <div>
      <Helmet title="Popular Movies" />
      {renderContentConditionally(loading, error, renderedContent)}
    </div>
  );
};

export default MoviesPage;

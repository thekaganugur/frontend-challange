import React from 'react';
import {
  entriesToCardsArr,
  filterEntries,
  renderContentConditionally,
  sortByTitleAsc,
  sortByTitleDesc,
  sortByYearAsc,
  sortByYearDesc,
} from '.';
import { Entries } from '../models';

test('Renders content accordingly loading and error', () => {
  const content = <div>content</div>;
  const loadingEl = <div>Loading...</div>;
  const errorEl = <div>Oops, something went wrong....</div>;

  expect(renderContentConditionally(false, '', content)).toEqual(content);
  expect(renderContentConditionally(true, '', content)).toEqual(loadingEl);
  expect(renderContentConditionally(true, 'Err', content)).toEqual(loadingEl);
  expect(renderContentConditionally(false, 'Err', content)).toEqual(errorEl);
});

test('Sort entries by year in ascending order 0-9', () => {
  expect(sortByYearAsc(entries)).toEqual(sortedByYearAsc);
});
test('Sort entries by year in descending order 9-0', () => {
  expect(sortByYearDesc(entries)).toEqual(entries);
});
test('Sort entries by title in ascending order A-Z', () => {
  expect(sortByTitleAsc(entries)).toEqual(sortedByTitleAsc);
});
test('Sort entries by title in descending order Z-A', () => {
  expect(sortByTitleDesc(entries)).toEqual(sortedByTitleDesc);
});

test('Filters entries by given string', () => {
  expect(filterEntries(entries, 'Wol')).toEqual(entriesFilteredByWol);
});

test('Transforms entries to usable array by cards', () => {
  expect(entriesToCardsArr(entries)).toEqual(entriesForCardsArr);
});

const entries: Entries[] = [
  {
    title: 'Wolf Creek',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2016,
  },
  {
    title: 'No Activity',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: 'Better Call Saul',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
];
const sortedByTitleAsc: Entries[] = [
  {
    title: 'Better Call Saul',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: 'No Activity',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: 'Wolf Creek',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2016,
  },
];

const sortedByTitleDesc: Entries[] = [
  {
    title: 'Wolf Creek',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2016,
  },
  {
    title: 'No Activity',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: 'Better Call Saul',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
];

const sortedByYearAsc: Entries[] = [
  {
    title: 'No Activity',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: 'Better Call Saul',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: 'Wolf Creek',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2016,
  },
];

const entriesFilteredByWol: Entries[] = [
  {
    title: 'Wolf Creek',
    description: '',
    programType: 'series',
    images: {
      'Poster Art': {
        url: '',
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2016,
  },
];

const entriesForCardsArr = [
  {
    title: 'Wolf Creek',
    image: '',
  },
  {
    title: 'No Activity',
    image: '',
  },
  {
    title: 'Better Call Saul',
    image: '',
  },
];

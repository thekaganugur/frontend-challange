import React from 'react';
import { ReactNode } from 'react';
import { Entries, Form, Sort } from '../models';

export const sortByYearDesc = (entries: Entries[]) =>
  entries.slice().sort((a, b) => b.releaseYear - a.releaseYear);

export const sortByYearAsc = (entries: Entries[]) =>
  entries.slice().sort((a, b) => a.releaseYear - b.releaseYear);

export const sortByTitleAsc = (entries: Entries[]) =>
  entries.slice().sort((a, b) => a.title.localeCompare(b.title));

export const sortByTitleDesc = (entries: Entries[]) =>
  entries.slice().sort((a, b) => b.title.localeCompare(a.title));

export const handleRelatedSort = (entries: Entries[], sortType: Sort) => {
  switch (sortType) {
    case 'yearDesc':
      // 9-0
      return sortByYearDesc(entries);
    case 'yearAsc':
      // 0-9
      return sortByYearAsc(entries);
    case 'titleDesc':
      // Z-A
      return sortByTitleDesc(entries);
    case 'titleAsc':
      // A-Z
      return sortByTitleAsc(entries);
    default:
      return entries;
  }
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

export const sortArr: { value: Sort; label: string }[] = [
  { value: '', label: 'None' },
  { value: 'yearDesc', label: 'Sort by year in descending order' },
  { value: 'yearAsc', label: 'Sort by year in ascending order' },
  { value: 'titleDesc', label: 'Sort by title in descending order (Z-A)' },
  { value: 'titleAsc', label: 'Sort by title in ascending order (A-Z)' },
];

export const getCardsReadyFilteredSortedArray = (
  entries: Entries[],
  form: Form
) =>
  entriesToCardsArr(
    handleRelatedSort(filterEntries(entries, form.filter), form.sort)
  );

export const renderContentConditionally = (
  loading: boolean,
  error: string | null,
  content: ReactNode
) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Oops, something went wrong....</div>;
  return content;
};

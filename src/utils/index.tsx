import { Entries, Sort } from '../models';

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
  { value: 'titleDesc', label: 'Sort by title in descending order (A-Z)' },
  { value: 'titleAsc', label: 'Sort by title in ascending order (Z-A)' },
];

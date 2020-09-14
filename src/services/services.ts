import { Data, ProgramType } from '../models';
import sampleData from '../sampleData.json';
import { sortByTitleAsc } from '../utils';

const data: Data = sampleData as Data;

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const getFilteredAndSortedData = (programType: ProgramType) =>
  sortByTitleAsc(
    data.entries.filter(
      (entry) => entry.programType === programType && entry.releaseYear >= 2010
    )
  );

export const getData = (programType: ProgramType) =>
  sleep(500).then(() => {
    if (!navigator.onLine) {
      throw new Error('No internet');
    } else {
      return getFilteredAndSortedData(programType);
    }
  });

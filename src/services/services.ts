import { Data, ProgramType } from '../models';
import sampleData from '../sampleData.json';

const data: Data = sampleData as Data;

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const getFilteredAndSortedData = () =>
  data.entries
    .filter(
      ({ programType, releaseYear }) =>
        programType === 'series' && releaseYear >= 2010
    )
    .sort((a, b) => a.title.localeCompare(b.title));

export const getData = (programType: ProgramType) =>
  sleep(1000).then(() => getFilteredAndSortedData());

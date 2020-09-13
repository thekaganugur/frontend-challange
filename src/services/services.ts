import { Data, ProgramType } from '../models';
import sampleData from '../sampleData.json';

const data: Data = sampleData as Data;

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const getFilteredAndSortedData = (programType: ProgramType) =>
  data.entries
    .filter(
      (entry) => entry.programType === programType && entry.releaseYear >= 2010
    )
    .sort((a, b) => a.title.localeCompare(b.title));

export const getData = (programType: ProgramType) =>
  sleep(1000).then(() => getFilteredAndSortedData(programType));

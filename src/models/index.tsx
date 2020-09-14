type PosterArt = {
  url: string;
  width: number;
  height: number;
};

type Images = {
  'Poster Art': PosterArt;
};

export type ProgramType = 'series' | 'movie';

export type Entries = {
  title: string;
  description: string;
  programType: ProgramType;
  images: Images;
  releaseYear: number;
};

export type Data = { total: number; entries: Entries[] };

export type Sort = '' | 'yearDesc' | 'yearAsc' | 'titleDesc' | 'titleAsc';

export interface Form {
  filter: string;
  sort: Sort;
}

export interface ExternalLink {
  name: string;
  url: string;
}

export interface heroModel {
  _id: string;
  external_links: ExternalLink[];
  genres: any[];
  studios: any[];
  licensors: any[];
  producers: any[];
  premiered: string;
  synopsis: string;
  rating: string;
  weekday: string;
  airing: boolean;
  status: string;
  episodes: number;
  type: string;
  image_url: string;
  title_Japanese: string;
  title_english: string;
  title: string;
  __v: number;
  year: string;
}

export interface heroResult {
  title: string;
  image_url: string;
  weekday: string;
  airing: boolean;
  external_links: ExternalLink[];
}

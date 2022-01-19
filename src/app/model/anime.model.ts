export interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface ExplicitGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Theme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Anime {
  mal_id: number;
  url: string;
  title: string;
  image_url: string;
  synopsis: string;
  type?: any;
  airing_start: Date;
  episodes?: number;
  members: number;
  genres: Genre[];
  explicit_genres: ExplicitGenre[];
  themes: Theme[];
  demographics: Demographic[];
  source: string;
  producers: Producer[];
  score?: number;
  licensors: any[];
  r18: boolean;
  kids: boolean;
  continuing: boolean;
}

export interface RootObject {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  season_name: string;
  season_year: number;
  anime: Anime[];
}

export  interface Jinkan {
  title: string;
  image_url: string;
  synopsis: string;
  airing_start: number;
  genres: Genre[];
  producers: Producer;
  score: number | undefined;
  r18: boolean;
  kids: boolean;
}

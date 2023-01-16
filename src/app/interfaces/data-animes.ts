export interface DataAnimes {
  data: DataAnimes[];
  message: message[];
  count: count[];
  mal_id: number;
  url: string;
  img_url: string;
  images: { [key: string]: Image };
  title: string;
  type: string;
  episodes: number | null;
  status: Status;
  duration: string;
  score: number;
  scored_by: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: null | string;
  background: null | string;
  season: null | string;
  year: number | null;
  averange: number;
}
export enum Status {
  CurrentlyAiring = 'Currently Airing',
  FinishedAiring = 'Finished Airing',
}
export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}
export interface message{

}
export interface count{

}

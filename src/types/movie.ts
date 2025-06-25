export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string[];
  year: number;
  duration: string;
  rating: string;
  poster: string;
  backdrop: string;
  trailer?: string;
  director: string;
  cast: string[];
}

export interface MovieCategory {
  id: string;
  name: string;
  movies: Movie[];
}
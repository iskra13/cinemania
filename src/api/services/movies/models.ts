export type DocsArr<T> = { docs: T[] };

export type ShortDescriptionMovie = {
  alternativeName: string | null;
  name: string;
  id: number;
  poster: {
    previewUrl: string;
  } | null;
  shortDescription: string | null;
  type: string;
  year: number;
  rating: {
    kp: number;
  };
};

export type CardsDescriptionMovie = {
  alternativeName: string;
  name: string;
  poster: { url: string };
  id: number;
  type: string;
  rating: { kp: number };
};

type Person = { id: number; description: string; photo: string; enProfession: string };

type Audience = {
  country: string;
};

type Trailers = {
  url: string;
};

type SimilarMovies = {
  alternativeName: string;
  name: string;
  id: number;
};

export type AllDescriptionMovie = {
  name: string;
  alternativeName: string;
  type: string;
  ageRating: number;
  description: string;
  persons: Person[];
  audience: Audience[];
  videos: Trailers[];
  similarMovies: SimilarMovies[];
  poster: { url: string };
  rating: { kp: number };
  backdrop: { url: string };
  year: number;
};

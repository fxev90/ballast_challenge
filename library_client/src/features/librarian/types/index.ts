export interface Book {
  id: number;
  title: string;
  isbn: string;
  author_name: string;
  author_last_name: string;
  genre_name: string;
}

export interface Author {
  id: number;
  names: string;
  last_names: string;
}

export interface Genre {
  id: number;
  name: string;
}
import { Key } from "react";

export interface Movie {
  id: string;
  title: string;
  directors: Key[];
  actors: Key[];
  genres: string[];
  year: string;
}

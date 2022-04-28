interface CharacterData {
  id: number;
  name: string,
  status: "Alive" | "Dead" | "unknown"
  species: string,
  type: string,
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  },
  location: {
    name: string;
    url: string;
  },
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface CharacterProps {
  count: number;
  pages: number;
  next: string;
  prev: string;
  results: CharacterData[];
}
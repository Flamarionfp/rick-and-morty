export type specietype = "Human" | "Humanoid" | "Alien" | "unknown";
export type statusType = "Alive" | "Dead" | "unknown";
export type genderType = "Female" | "Male" | "Genderless" | "unknown";
export interface CharacterData {
  id: number;
  name: string,
  status: statusType,
  species: specietype,
  type: string,
  gender: genderType,
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
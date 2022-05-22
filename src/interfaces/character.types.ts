export type specietype = "Human" | "Alien" | "unknown";
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
interface InfoProps {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export interface CharacterProps {
  info: InfoProps;
  results: CharacterData[];
}
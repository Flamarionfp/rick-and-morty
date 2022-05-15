import { specietype, statusType, genderType } from '../interfaces/character.types'

export function getTranslatedSpecie(specie: specietype) {
  const options = {
    'Human': 'Humano',
    'Humanoid': 'Humano semelhante',
    'Alien': 'Alienígena',
    'unknown': 'Desconhecida',
  };

  return options[specie];
}

export function getTranslatedStatus(status: statusType) {
  const options = {
    'Alive': 'Vivo',
    'Dead': 'Morto',
    'unknown': 'Desconhecido',
  };

  return options[status];
};

export function getTranslatedGender(gender: genderType) {
  const options = {
    'Female': 'Feminino',
    'Male': 'Masculino',
    'Genderless': 'Sem gênero',
    'unknown': 'Desconhecido',
  };

  return options[gender];
}

import { statusType, genderType } from '../interfaces/character.types'

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

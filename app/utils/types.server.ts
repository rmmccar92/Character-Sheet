export interface RegisterForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginForm {
  email: string;
  password: string;
}
export interface CharacterForm {
  characterName: string;
  characterClass: string;
  alignment: string;
  level: number;
  deity: string;
  homeland: string;
  race: string;
  size: string;
  gender: string;
  characterAge: string;
  characterHeight?: string;
  weight: string;
  hairColor?: string | null;
  eyeColor?: string;
  strength: number;
  dexterity: number;
  constitution: number;
  wisdom: number;
  intelligence: number;
  charisma: number;
}

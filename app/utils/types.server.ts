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
  characterName?: string;
  characterClass?: string;
  alignment?: string;
  level?: string;
  deity?: string;
  homeland?: string;
  race?: string;
  size?: string;
  gender?: string;
  characterAge?: string;
  characterHeight?: string;
  weight?: string;
  hairColor?: string | null;
  eyeColor?: string;
  strength?: number | string;
  dexterity?: number | string;
  constitution?: number | string;
  wisdom?: number | string;
  intelligence?: number | string;
  charisma?: number | string;
  skills?: Skills;
  feats?: FeatsAndTraits;
  traits?: FeatsAndTraits;
  image?: string;
}

export type Skills = {
  acrobatics: number | string;
  appraise: number | string;
  athletics: number | string;
  bluff: number | string;
  climb: number | string;
  craft: number | string;
  diplomacy: number | string;
  disableDevice: number | string;
  disguise: number | string;
  escapeArtist: number | string;
  fly: number | string;
  handleAnimal: number | string;
  heal: number | string;
  intimidation: number | string;
  linguistics: number | string;
  perception: number | string;
  performance: number | string;
  profession: number | string;
  ride: number | string;
  senseMotive: number | string;
  sleightOfHand: number | string;
  spellcraft: number | string;
  stealth: number | string;
  survival: number | string;
  swim: number | string;
  useMagicDevice: number | string;
  knowledgeArcana: number | string;
  knowledgeDungeoneering: number | string;
  knowledgeEngineering: number | string;
  knowledgeGeography: number | string;
  knowledgeHistory: number | string;
  knowledgeLocal: number | string;
  knowledgeNature: number | string;
  knowledgeNobility: number | string;
  knowledgePlanes: number | string;
  knowledgeReligion: number | string;
};

export interface FeatsAndTraits {
  name?: string;
  description?: string;
}

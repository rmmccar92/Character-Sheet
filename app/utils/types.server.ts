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
  ac?: string;
  touch?: string;
  flatFooted?: string;
  hp?: string;
  dr?: string;
  sr?: string;
  fortitude?: string;
  will?: string;
  reflex?: string;
  resistances?: string;
  immunities?: string;
  cmd?: string;
  cmb?: string;
  bab?: string;
  initiative?: string;
  speed?: string;
  // strength?: number | string;
  // dexterity?: number | string;
  // constitution?: number | string;
  // wisdom?: number | string;
  // intelligence?: number | string;
  // charisma?: number | string;
  stats: {
    strength: {
      value: number | string | 10;
    };
    dexterity: {
      value: number | string | 10;
    };
    constitution: {
      value: number | string | 10;
    };
    wisdom: {
      value: number | string | 10;
    };
    intelligence: {
      value: number | string | 10;
    };
    charisma: {
      value: number | string | 10;
    };
  };
  skills: SkillsType;
  feats?: FeatsAndTraits;
  traits?: FeatsAndTraits;
  image?: string;
}

export interface SkillsType {
  acrobatics: Skill;
  appraise: Skill;
  athletics: Skill;
  bluff: Skill;
  climb: Skill;
  craft: Skill;
  diplomacy: Skill;
  disableDevice: Skill;
  disguise: Skill;
  escapeArtist: Skill;
  fly: Skill;
  handleAnimal: Skill;
  heal: Skill;
  intimidation: Skill;
  linguistics: Skill;
  perception: Skill;
  performance: Skill;
  profession: Skill;
  ride: Skill;
  senseMotive: Skill;
  sleightOfHand: Skill;
  spellcraft: Skill;
  stealth: Skill;
  survival: Skill;
  swim: Skill;
  useMagicDevice: Skill;
  knowledgeArcana: Skill;
  knowledgeDungeoneering: Skill;
  knowledgeEngineering: Skill;
  knowledgeGeography: Skill;
  knowledgeHistory: Skill;
  knowledgeLocal: Skill;
  knowledgeNature: Skill;
  knowledgeNobility: Skill;
  knowledgePlanes: Skill;
  knowledgeReligion: Skill;
}

export interface Skill {
  ranks: number | string;
  trained: boolean;
}

export interface FeatsAndTraits {
  name?: string;
  description?: string;
}

export type SkillIndex<SkillsType> = {
  [name in keyof SkillsType]: string;
};

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
  drType?: string;
  sr?: string;
  srType?: string;
  fortitude?: string;
  will?: string;
  reflex?: string;
  resistances?: string;
  immunities?: string;
  cmd?: string;
  cmbSizeMod?: string;
  cmbMiscMod?: string;
  cmb?: string;
  bab?: string;
  initiative?: string;
  baseSpeed?: string;
  speedArmorPenalty?: string;
  speedMiscMod?: string;
  flySpeed?: string;
  swimSpeed?: string;
  climbSpeed?: string;
  burrowSpeed?: string;
  stats?: string;
  skills?: string;
  feats?: string;
  traits?: string;
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

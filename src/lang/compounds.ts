import {
  Word,
  Root,
  Compound,
  Tag as t,
  RootDictionary,
  CompoundDictionary,
} from './types';
import { r } from './roots';

let is_c = (id) => id > 1000;

enum c {
  // Every id over 1000 is a compound
  red = 1001,
  yellow,
  blue,
  orange,
  green,
  purple,
  black,
  gray,
  white,
  bright,
  dark,
  yesterday,
  tomorrow,
  next_year,
  yesteryear,
  present_continuous,
  present_perfect,
  present_perfect_continuous,
  past_continuous,
  past_perfect,
  past_perfect_continuous,
  future_continuous,
  future_perfect,
  future_perfect_continuous,
  animal_lesser,
  animal_bio,
  marriage,
  sex_gender,
  sex_act,
  sex_reproduction,
  compute,
  copy,
  normalize,
  purpose,
}

let colors: CompoundDictionary = {
  [c.red]: { is: [r.light, r.first] },
  [c.yellow]: { is: [r.light, r.second] },
  [c.blue]: { is: [r.light, r.third] },
  [c.orange]: { is: [r.light, r.first, r.second] },
  [c.green]: { is: [r.light, r.second, r.third] },
  [c.purple]: { is: [r.light, r.first, r.third] },

  [c.black]: { is: [r.light, r.none] },
  [c.gray]: { is: [r.light, r.some] },
  [c.white]: { is: [r.light, r.all] },

  [c.bright]: { is: [r.light, r.more] },
  [c.dark]: { is: [r.light, r.less] },
};

let timeCompound: CompoundDictionary = {
  [c.yesterday]: { is: [r.day, r.next], tags: [t.Time, t.Compound] },
  [c.tomorrow]: { is: [r.day, r.prev], tags: [t.Time, t.Compound] },

  [c.next_year]: { is: [r.year, r.next], tags: [t.Time, t.Compound] },
  [c.yesteryear]: { is: [r.year, r.prev], tags: [t.Time, t.Compound] },

  // TODO: complex tenses
  [c.present_continuous]: { is: [], tags: [t.Time, t.Compound] },
  [c.present_perfect]: { is: [], tags: [t.Time, t.Compound] },
  [c.present_perfect_continuous]: { is: [], tags: [t.Time, t.Compound] },
  [c.past_continuous]: { is: [], tags: [t.Time, t.Compound] },
  [c.past_perfect]: { is: [], tags: [t.Time, t.Compound] },
  [c.past_perfect_continuous]: { is: [], tags: [t.Time, t.Compound] },
  [c.future_continuous]: { is: [], tags: [t.Time, t.Compound] },
  [c.future_perfect]: { is: [], tags: [t.Time, t.Compound] },
  [c.future_perfect_continuous]: { is: [], tags: [t.Time, t.Compound] },
};

// let c;
let compounds: CompoundDictionary = {
  ...colors,
  ...timeCompound,

  [c.animal_lesser]: {
    is: [r.agent, r.less],
  },
  [c.animal_bio]: {
    is: [r.agent, r.life],
  },

  [c.marriage]: {
    is: [r.merge, r.love],
    noun: [''],
    transitive: [''],
    intransitive: [''],
    adjective: [''],
    adverb: [''],
    tags: [t.Compound],
  },

  [c.sex_gender]: {
    is: [r.male, r.female],
  },
  [c.sex_act]: {
    is: [r.merge, r.pleasure],
  },
  [c.sex_reproduction]: {
    is: [r.merge, c.sex_gender],
  },

  [c.compute]: {
    is: [r.work, r.model],
  },
  [c.copy]: {
    is: [r.create, r.same],
  },

  [c.normalize]: {
    is: [r.change, r.shape, r.same],
  },

  [c.purpose]: {
    is: [r.to, r.end],
  },
};

export { c, compounds };

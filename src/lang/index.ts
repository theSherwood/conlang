interface Word {
  noun?: string | [string] | [string, () => ExampleResult[]];
  transitive?: string | [string] | [string, () => ExampleResult[]];
  intransitive?: string | [string] | [string, () => ExampleResult[]];
  adjective?: string | [string] | [string, () => ExampleResult[]];
  adverb?: string | [string] | [string, () => ExampleResult[]];
  preposition?: string | [string] | [string, () => ExampleResult[]];
  tags?: Tag[];
}

interface Root extends Word {
  is?: string;
}

interface Compound extends Word {
  is?: () => Root[] | Compound[];
}

interface ExampleResult {
  is: Root[] | Compound[];
  translations: string[];
}

type Tag = string;

let t: { [key: string]: Tag } = {
  Grammar: "grammar",
  Root: "root",
  Compound: "compound",
  Number: "number",
  Time: "time"
};

interface RootDictionary {
  [key: string]: Root;
}

interface CompoundDictionary {
  [key: string]: Compound;
}

let emptyWord = {
  is: "",
  noun: "",
  transitive: "",
  intransitive: "",
  adjective: "",
  adverb: "",
  preposition: "",
  tags: []
};

let r: RootDictionary;

let grammar: RootDictionary = {
  subclause: {},
  transitive: {},
  intransitive: {}
};

let pronouns: RootDictionary = {
  me: {},
  it: {},
  you: {}
};

let numbers: RootDictionary = {
  // TODO: figure out how to handle zero/none
  one: { is: "", tags: [t.Number, t.Root] },
  two: { is: "", tags: [t.Number, t.Root] },
  three: { is: "", tags: [t.Number, t.Root] },
  four: { is: "", tags: [t.Number, t.Root] },
  five: { is: "", tags: [t.Number, t.Root] },
  six: { is: "", tags: [t.Number, t.Root] },
  seven: { is: "", tags: [t.Number, t.Root] },
  eight: { is: "", tags: [t.Number, t.Root] },
  nine: { is: "", tags: [t.Number, t.Root] }
};

let ordinals: RootDictionary = {
  zeroth: { is: "", tags: [t.Number, t.Root] },
  first: { is: "", tags: [t.Number, t.Root] },
  second: { is: "", tags: [t.Number, t.Root] },
  third: { is: "", tags: [t.Number, t.Root] },
  fourth: { is: "", tags: [t.Number, t.Root] },
  fifth: { is: "", tags: [t.Number, t.Root] },
  sixth: { is: "", tags: [t.Number, t.Root] },
  seventh: { is: "", tags: [t.Number, t.Root] },
  eighth: { is: "", tags: [t.Number, t.Root] },
  ninth: { is: "", tags: [t.Number, t.Root] }
};

let timeRoot: RootDictionary = {
  time: { is: "", tags: [t.Time] },

  past: { is: "", tags: [t.Time] },
  present: { is: "", tags: [t.Time] },
  future: { is: "", tags: [t.Time] },

  second: { is: "", tags: [t.Time] },
  day: { is: "", tags: [t.Time] },
  year: { is: "", tags: [t.Time] }
};

let roots: RootDictionary = {
  ...grammar,
  ...pronouns,
  ...numbers,
  ...ordinals,
  ...timeRoot,

  yes: {},
  no: {},
  maybe: {},

  true: {},
  false: {},

  good: { is: "" },
  bad: { is: "" },

  simple: { is: "" },
  complex: { is: "" },

  none: { is: "" },
  some: { is: "" },
  all: { is: "" },

  few: {},
  many: {},

  merge: { is: "" },
  split: { is: "" },

  group: { is: "" },
  part: { is: "" },

  love: { is: "" },
  hate: { is: "" },

  life: { is: "" },
  death: { is: "" },

  prev: { is: "" },
  next: { is: "" },

  chaos: {},
  order: {},

  male: {},
  female: {},
  neuter: {},

  rare: {},
  common: {},

  open: {},
  close: {},

  big: {},
  small: {},

  agent: {},
  object: {},

  same: {},
  distinct: {},
  opposite: {},

  begin: {},
  end: {},

  near: {},
  far: {},

  smooth: {},
  rough: {},

  and: {},
  or: {},
  xor: {},

  create: {},
  repair: {},
  break: {},
  destroy: {},

  take: {},
  put: {},

  count: {},
  iterate: {},

  to: {},
  from: {},

  through: {},
  around: {},
  between: {},

  more: {},
  less: {},

  pleasure: {},
  pain: {},

  this: {},
  that: {},

  overt: {},
  covert: {},

  real: {},
  model: {},
  unreal: {},

  static: {},
  dynamic: {},

  corner: {},
  round: {},

  hard: {},
  soft: {},

  // TODO: organize
  thing: {},
  direction: {},
  obligation: {},
  work: {},
  change: {},
  shape: {},
  use: {},
  mark: {},
  light: {}
};
r = roots;

let colors: CompoundDictionary = {
  red: { is: () => [r.light, r.first] },
  yellow: { is: () => [r.light, r.second] },
  blue: { is: () => [r.light, r.third] },
  orange: { is: () => [r.light, r.first, r.second] },
  green: { is: () => [r.light, r.second, r.third] },
  purple: { is: () => [r.light, r.first, r.third] },

  black: { is: () => [r.light, r.none] },
  white: { is: () => [r.light, r.all] },

  bright: { is: () => [r.light, r.more] },
  dark: { is: () => [r.light, r.less] }
};

let timeCompound: CompoundDictionary = {
  yesterday: { tags: [t.Time, t.Compound] },
  tomorrow: { tags: [t.Time, t.Compound] },

  next_year: { tags: [t.Time, t.Compound] },
  yesteryear: { tags: [t.Time, t.Compound] },

  // TODO: complex tenses
  present_continuous: { tags: [t.Time, t.Compound] },
  present_perfect: { tags: [t.Time, t.Compound] },
  present_perfect_continuous: { tags: [t.Time, t.Compound] },
  past_continuous: { tags: [t.Time, t.Compound] },
  past_perfect: { tags: [t.Time, t.Compound] },
  past_perfect_continuous: { tags: [t.Time, t.Compound] },
  future_continuous: { tags: [t.Time, t.Compound] },
  future_perfect: { tags: [t.Time, t.Compound] },
  future_perfect_continuous: { tags: [t.Time, t.Compound] }
};

let c;
let compounds: CompoundDictionary = {
  ...colors,
  ...timeCompound,

  animal_lesser: {
    is: () => [r.agent, r.less]
  },
  animal_bio: {
    is: () => [r.agent, r.life]
  },

  marriage: {
    is: () => [r.merge, r.love],
    noun: [""],
    transitive: [""],
    intransitive: [""],
    adjective: [""],
    adverb: [""],
    tags: [t.Compound]
  },

  sex_gender: {
    is: () => [r.male, r.female]
  },
  sex_act: {
    is: () => [r.merge, r.pleasure]
  },
  sex_reproduction: {
    is: () => [r.merge, c.sex_gender]
  },

  compute: {
    is: () => [r.work, r.model]
  },
  copy: {
    is: () => [r.create, r.same]
  },

  normalize: {
    is: () => [r.change, r.shape, r.same]
  },

  purpose: {
    is: () => [r.to, r.end]
  }
};
c = compounds;

export { roots, compounds };

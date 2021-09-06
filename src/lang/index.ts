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
  ...numbers,
  ...ordinals,
  ...timeRoot,

  good: { is: "" },
  bad: { is: "" },

  simple: { is: "" },
  complex: { is: "" },

  none: { is: "" },
  some: { is: "" },
  all: { is: "" },

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

  distinct: {},
  same: {},

  thing: {}
};
r = roots;

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
  ...timeCompound,

  marriage: {
    is: () => [r.merge, r.love],
    noun: [""],
    transitive: [""],
    intransitive: [""],
    adjective: [""],
    adverb: [""],
    tags: [t.Compound]
  }
};
c = compounds;

export { roots, compounds };

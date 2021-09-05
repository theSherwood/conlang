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
  is: Word[];
  translations: string[];
}

type Tag = string;

let t: { [key: string]: Tag } = {
  Grammar: "grammar",
  Root: "root",
  Compound: "compound",
  Number: "number"
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
  preposition: ""
};

let r: RootDictionary;

let numbers: RootDictionary = {
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

// I don't think we actually want each tense as a root
let tenses: RootDictionary = {
  present_simple: { is: "" },
  present_continuous: { is: "" },
  present_perfect: { is: "" },
  present_perfect_continuous: { is: "" },

  past_simple: { is: "" },
  past_continuous: { is: "" },
  past_perfect: { is: "" },
  past_perfect_continuous: { is: "" },

  future_simple: { is: "" },
  future_continuous: { is: "" },
  future_perfect: { is: "" },
  future_perfect_continuous: { is: "" }
};

let roots: RootDictionary = {
  ...numbers,
  ...ordinals,
  ...tenses,

  time: { is: "" },

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
  next: { is: "" }
};
r = roots;

let c;
let compounds: CompoundDictionary = {
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

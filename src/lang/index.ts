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

let emptyWord = {
  is: "",
  noun: "",
  transitive: "",
  intransitive: "",
  adjective: "",
  adverb: "",
  preposition: ""
};

type Tag = string;

let t: { [key: string]: Tag } = {
  Grammar: "grammar",
  Root: "root",
  Compound: "compound"
};

interface RootDictionary {
  [key: string]: Root;
}

interface CompoundDictionary {
  [key: string]: Compound;
}

let w: RootDictionary = {
  // Roots
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

  // Numbers
  one: { is: "" },
  two: { is: "" },
  three: { is: "" },
  four: { is: "" },
  five: { is: "" },
  six: { is: "" },
  seven: { is: "" },
  eight: { is: "" },
  nine: { is: "" }
};

let w2: CompoundDictionary = {
  // Compound
  marriage: {
    is: () => [w.merge, w.love],
    noun: [""],
    transitive: [""],
    intransitive: [""],
    adjective: [""],
    adverb: [""],
    tags: [t.Compound]
  }
};

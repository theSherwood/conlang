interface Word {
  is?: string | (() => Word[]);
  noun?: string | [string] | [string, () => ExampleResult[]];
  transitive?: string | [string] | [string, () => ExampleResult[]];
  intransitive?: string | [string] | [string, () => ExampleResult[]];
  adjective?: string | [string] | [string, () => ExampleResult[]];
  adverb?: string | [string] | [string, () => ExampleResult[]];
  preposition?: string | [string] | [string, () => ExampleResult[]];
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

let w: { [key: string]: Word } = {
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
  nine: { is: "" },

  // Compound
  marriage: {
    is: () => [w.merge, w.love],
    noun: [""],
    transitive: [""],
    intransitive: [""],
    adjective: [""],
    adverb: [""]
  }
};

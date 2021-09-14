interface Word {
  noun?: string | [string] | [string, Example[]];
  transitive?: string | [string] | [string, Example[]];
  intransitive?: string | [string] | [string, Example[]];
  adjective?: string | [string] | [string, Example[]];
  adverb?: string | [string] | [string, Example[]];
  preposition?: string | [string] | [string, Example[]];
  tags?: Tag[];
}

interface Root extends Word {
  is?: string;
}

interface Compound extends Word {
  is?: number[];
}

interface Example {
  is: Root[] | Compound[];
  translations: string[];
}

enum Tag {
  Grammar = 'grammar',
  Root = 'root',
  Compound = 'compound',
  Number = 'number',
  Time = 'time',
}

interface RootDictionary {
  [key: string]: Root;
}

interface CompoundDictionary {
  [key: string]: Compound;
}

export { Word, Root, Compound, Tag, RootDictionary, CompoundDictionary };

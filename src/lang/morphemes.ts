// prettier-ignore
let consonants1 = [
  'p', 'b',
  't', 'd',
  // 'k', 'g',
  's', 'z',
  'c',
  'w',
  'j',
  'h',
];

let vowels = ['a', 'e', 'i', 'o', 'u'];

let consonants2 = ['', 'm', 'n', 'v', 'k', 'l'];

let getMorphemes = (consonants1, vowels, consonants2) => {
  let morphemes = [];
  for (let c1 of consonants1) {
    for (let v of vowels) {
      for (let c2 of consonants2) {
        morphemes.push(c1 + v + c2);
      }
    }
  }
  return morphemes;
};

let morphemes = getMorphemes(consonants1, vowels, consonants2);

console.log('morphemes', morphemes);

export { morphemes, getMorphemes, consonants1, vowels, consonants2 };

// prettier-ignore
let consonants1 = [
  'p', 'b',
  't', 'd',
  'k', 'g',
  's', 'z',
  'c',
  'w',
  'j',
];

let vowels = ['a', 'e', 'i', 'o', 'u'];

let consonants2 = ['', 'm', 'n', 'v'];

let getPhonemes = (consonants1, vowels, consonants2) => {
  let phonemes = [];
  for (let c1 of consonants1) {
    for (let v of vowels) {
      for (let c2 of consonants2) {
        phonemes.push(c1 + v + c2);
      }
    }
  }
  return phonemes;
};

let phonemes = getPhonemes(consonants1, vowels, consonants2);

console.log('phonemes', phonemes);

export { phonemes, getPhonemes, consonants1, vowels, consonants2 };

const imageZeroKey = {
  name: 'zeroKey',
  srcGrand: '/picture/noneKeyGrand.png',
  srcTreble: '/picture/noneKeyTreble.png',
  srcBass: '/picture/noneKeyBass.png',
  key: 'C-a',
  odp: `C-dur / a-moll`,
};
const imageOneflat = {
  name: 'oneKey',
  srcGrand: '/picture/key1flatGrand.png',
  srcTreble: '/picture/key1flatTreble.png',
  srcBass: '/picture/key1flatBass.png',
  key: 'F-d',
  odp: `F-dur / d-moll`,
};

const imageOneSharp = {
  name: 'oneKey',
  srcGrand: '/picture/key1sharpGrand.png',
  srcTreble: '/picture/key1sharpTreble.png',
  srcBass: '/picture/key1sharpBass.png',
  key: 'G-e',
  odp: `G-dur / e-moll`,
};

const imageTwoFlat = {
  name: 'twoKey',
  srcGrand: '/picture/key2flatGrand.png',
  srcTreble: '/picture/key2flatTreble.png',
  srcBass: '/picture/key2flatBass.png',
  key: 'B-g',
  odp: `B-dur / g-moll`,
};

const imageTwoSharp = {
  name: 'twoKey',
  srcGrand: '/picture/key2sharpGrand.png',
  srcTreble: '/picture/key2sharpTreble.png',
  srcBass: '/picture/key2sharpBass.png',
  key: 'D-h',
  odp: `D-dur / h-moll`,
};

const imageThreeFlat = {
  name: 'threeKey',
  srcGrand: '/picture/key3flatGrand.png',
  srcTreble: '/picture/key3flatTreble.png',
  srcBass: '/picture/key3flatBass.png',
  key: 'Es-c',
  odp: `Es-dur / c-moll`,
};

const imageThreeSharp = {
  name: 'threeKey',
  srcGrand: '/picture/key3sharpGrand.png',
  srcTreble: '/picture/key3sharpTreble.png',
  srcBass: '/picture/key3sharpBass.png',
  key: 'A-fis',
  odp: `A-dur / fis-moll`,
};

const imageFourFlat = {
  name: 'fourKey',
  srcGrand: '/picture/key4flatGrand.png',
  srcTreble: '/picture/key4flatTreble.png',
  srcBass: '/picture/key4flatBass.png',
  key: 'As-f',
  odp: `As-dur / f-moll`,
};

const imageFourSharp = {
  name: 'fourKey',
  srcGrand: '/picture/key4sharpGrand.png',
  srcTreble: '/picture/key4sharpTreble.png',
  srcBass: '/picture/key4sharpBass.png',
  key: 'E-cis',
  odp: `E-dur / cis-moll`,
};

const imageFiveFlat = {
  name: 'fiveKey',
  srcGrand: '/picture/key5flatGrand.png',
  srcTreble: '/picture/key5flatTreble.png',
  srcBass: '/picture/key5flatBass.png',
  key: 'Des-b',
  odp: `Des-dur / b-moll`,
};

const imageFiveSharp = {
  name: 'fiveKey',
  srcGrand: '/picture/key5sharpGrand.png',
  srcTreble: '/picture/key5sharpTreble.png',
  srcBass: '/picture/key5sharpBass.png',
  key: 'H-gis',
  odp: `H-dur / gis-moll`,
};

const imageSixSharp = {
  name: 'sixKey',
  srcGrand: '/picture/key6sharpGrand.png',
  srcTreble: '/picture/key6sharpTreble.png',
  srcBass: '/picture/key6sharpBass.png',
  key: 'Fis-dis',
  odp: `Fis-dur / dis-moll`,
};

const imageSixFlat = {
  name: 'sixKey',
  srcGrand: '/picture/key6flatGrand.png',
  srcTreble: '/picture/key6flatTreble.png',
  srcBass: '/picture/key6flatBass.png',
  key: 'Ges-es',
  odp: `Ges-dur / es-moll`,
};

const imageSevenSharp = {
  name: 'sevenKey',
  srcGrand: '/picture/key7sharpGrand.png',
  srcTreble: '/picture/key7sharpTreble.png',
  srcBass: '/picture/key7sharpBass.png',
  key: 'Cis-ais',
  odp: `Cis-dur / ais-moll`,
};

const imageSevenFlat = {
  name: 'sevenKey',
  srcGrand: '/picture/key7flatGrand.png',
  srcTreble: '/picture/key7flatTreble.png',
  srcBass: '/picture/key7flatBass.png',
  key: 'Ces-as',
  odp: `Ces-dur / as-moll`,
};

const gallery = [imageZeroKey, imageOneflat, imageOneSharp, imageTwoFlat, imageTwoFlat, imageThreeFlat, imageThreeSharp, imageFourFlat, imageFourSharp, imageFiveFlat, imageFiveSharp, imageSixFlat, imageSixSharp, imageSevenSharp, imageSevenFlat];

function randomImage(items) {
  return items[Math.floor(Math.random()* items.length)];
}

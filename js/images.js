const imageZeroKey = {
  name: 'zeroKey',
  srcGrand: '/picture/noneKeyGrand.png',
  srcTreble: '/picture/noneKeyTreble.png',
  srcBass: '/picture/noneKeyBass.png',
  key: 'C-a',
};
const imageOneflat = {
  name: 'oneKey',
  srcGrand: '/picture/key1flatGrand.png',
  srcTreble: '/picture/key1flatTreble.png',
  srcBass: '/picture/key1flatBass.png',
  key: 'F-d',
};

const imageOneSharp = {
  name: 'oneKey',
  srcGrand: '/picture/key1sharpGrand.png',
  srcTreble: '/picture/key1sharpTreble.png',
  srcBass: '/picture/key1sharpBass.png',
  key: 'G-e',
};

const imageTwoFlat = {
  name: 'twoKey',
  srcGrand: '/picture/key2flatGrand.png',
  srcTreble: '/picture/key2flatTreble.png',
  srcBass: '/picture/key2flatBass.png',
  key: 'B-g',
};

const imageTwoSharp = {
  name: 'twoKey',
  srcGrand: '/picture/key2sharpGrand.png',
  srcTreble: '/picture/key2sharpTreble.png',
  srcBass: '/picture/key2sharpBass.png',
  key: 'D-h',
};

const imageThreeFlat = {
  name: 'threeKey',
  srcGrand: '/picture/key3flatGrand.png',
  srcTreble: '/picture/key3flatTreble.png',
  srcBass: '/picture/key3flatBass.png',
  key: 'Es-c',
};

const imageThreeSharp = {
  name: 'threeKey',
  srcGrand: '/picture/key3sharpGrand.png',
  srcTreble: '/picture/key3sharpTreble.png',
  srcBass: '/picture/key3sharpBass.png',
  key: 'A-fis',
};

const imageFourFlat = {
  name: 'fourKey',
  srcGrand: '/picture/key4flatGrand.png',
  srcTreble: '/picture/key4flatTreble.png',
  srcBass: '/picture/key4flatBass.png',
  key: 'As-f',
};

const imageFourSharp = {
  name: 'fourKey',
  srcGrand: '/picture/key4sharpGrand.png',
  srcTreble: '/picture/key4sharpTreble.png',
  srcBass: '/picture/key4sharpBass.png',
  key: 'E-cis',
};

const imageFiveFlat = {
  name: 'fiveKey',
  srcGrand: '/picture/key5flatGrand.png',
  srcTreble: '/picture/key5flatTreble.png',
  srcBass: '/picture/key5flatBass.png',
  key: 'Des-b',
};

const imageFiveSharp = {
  name: 'fiveKey',
  srcGrand: '/picture/key5sharpGrand.png',
  srcTreble: '/picture/key5sharpTreble.png',
  srcBass: '/picture/key5sharpBass.png',
  key: 'H-gis',
};

const imageSixSharp = {
  name: 'sixKey',
  srcGrand: '/picture/key6sharpGrand.png',
  srcTreble: '/picture/key6sharpTreble.png',
  srcBass: '/picture/key6sharpBass.png',
  key: 'H-gis',
};

const imageSixFlat = {
  name: 'sixKey',
  srcGrand: '/picture/key6flatGrand.png',
  srcTreble: '/picture/key6flatTreble.png',
  srcBass: '/picture/key6flatBass.png',
  key: 'H-gis',
};

const imageSevenSharp = {
  name: 'sevenKey',
  srcGrand: '/picture/key7sharpGrand.png',
  srcTreble: '/picture/key7sharpTreble.png',
  srcBass: '/picture/key7sharpBass.png',
  key: 'H-gis',
};

const imageSevenFlat = {
  name: 'sevenKey',
  srcGrand: '/picture/key7flatGrand.png',
  srcTreble: '/picture/key7flatTreble.png',
  srcBass: '/picture/key7flatBass.png',
  key: 'H-gis',
};

const gallery = [imageZeroKey, imageOneflat, imageOneSharp, imageTwoFlat, imageTwoFlat, imageThreeFlat, imageThreeSharp, imageFourFlat, imageFourSharp, imageFiveFlat, imageFiveSharp, imageSixFlat, imageSixSharp, imageSevenSharp, imageSevenFlat];

function randomImage(items) {
  return items[Math.floor(Math.random()* Math.random() * items.length)];
}

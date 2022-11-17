const imageZeroKey = {
    name: 'zeroKey',
    srcGrand: '/picture/noneKeyGrand.png',
    srcTreble: '/picture/noneKeyTreble.png',
    srcBass: '/picture/noneKeyBass.png',
    key: 'C-a',
}
const imageOneflat = {
    name: 'oneKey',
    srcGrand: '/picture/key1flat.png',
    key: 'F-d',
}

const imageOneSharp = {
    name: 'oneKey',
    srcGrand: '/picture/key1sharp.png',
    key: 'G-e',
}

const imageTwoFlat = {
    name: 'twoKey',
    srcGrand: '/picture/key2flat.png',
    key: 'B-g',
}

const imageTwoSharp = {
    name: 'twoKey',
    srcGrand: '/picture/key2sharp.png',
    key: 'D-h',
}

const imageThreeFlat = {
    name: 'threeKey',
    srcGrand: '/picture/key3flat.png',
    key: 'Es-c',
}

const imageThreeSharp = {
    name: 'threeKey',
    srcGrand: '/picture/key3sharp.png',
    key: 'A-fis',
}

const imageFourFlat = {
    name: 'fourKey',
    srcGrand: '/picture/key4flat.png',
    key: 'As-f',
}

const imageFourSharp = {
    name: 'fourKey',
    srcGrand: '/picture/key4sharp.png',
    key: 'E-cis',
}

const imageFiveFlat = {
    name: 'fiveKey',
    srcGrand: '/picture/key5flat.png',
    key: 'Des-b',
}

const imageFiveSharp = {
    name: 'fiveKey',
    srcGrand: '/picture/key5sharp.png',
    key: 'H-gis',
}

const imageSixSharp = {
    name: 'sixKey',
    srcGrand: '/picture/key5sharp.png',
    key: 'H-gis',
}

const imageSixFlat = {
    name: 'sixKey',
    srcGrand: '/picture/key5sharp.png',
    key: 'H-gis',
}

const imageSevenSharp = {
    name: 'sevenKey',
    srcGrand: '/picture/key5sharp.png',
    key: 'H-gis',
}

const imageSevenFlat = {
    name: 'sevenKey',
    srcGrand: '/picture/key5sharp.png',
    key: 'H-gis',
}

const gallery = [imageZeroKey, imageOneflat, imageOneSharp, imageTwoFlat, imageTwoFlat, imageThreeFlat, imageThreeSharp, imageFourFlat, imageFourSharp, imageFiveFlat, imageFiveSharp]

function randomImage(items) {
    return items[Math.floor(Math.random()*items.length)]
}

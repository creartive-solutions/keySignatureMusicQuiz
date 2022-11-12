const imageZeroKey = {
    name: 'zeroKey',
    src: '/picture/noneKey.png',
    key: 'C-a',
}
const imageOneflat = {
    name: 'zeroKey',
    src: '/picture/key1flat.png',
    key: 'F-d',
}

const imageOneSharp = {
    name: 'zeroKey',
    src: '/picture/key1sharp.png',
    key: 'G-e',
}

const imageTwoFlat = {
    name: 'zeroKey',
    src: '/picture/key2flat.png',
    key: 'B-g',
}

const imageTwoSharp = {
    name: 'zeroKey',
    src: '/picture/key2sharp.png',
    key: 'D-h',
}

const imageThreeFlat = {
    name: 'zeroKey',
    src: '/picture/key3flat.png',
    key: 'Es-c',
}

const imageThreeSharp = {
    name: 'zeroKey',
    src: '/picture/key3sharp.png',
    key: 'A-fis',
}

const imageFourFlat = {
    name: 'zeroKey',
    src: '/picture/key4flat.png',
    key: 'As-f',
}

const imageFourSharp = {
    name: 'zeroKey',
    src: '/picture/key4sharp.png',
    key: 'E-cis',
}

const imageFiveFlat = {
    name: 'zeroKey',
    src: '/picture/key5flat.png',
    key: 'Des-b',
}

const imageFiveSharp = {
    name: 'zeroKey',
    src: '/picture/key5sharp.png',
    key: 'H-gis',
}

const gallery = [imageZeroKey, imageOneflat, imageOneSharp, imageTwoFlat, imageTwoFlat, imageThreeFlat, imageThreeSharp, imageFourFlat, imageFourSharp, imageFiveFlat, imageFiveSharp]

function randomImage(items) {
    return items[Math.floor(Math.random()*items.length)]
}

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(i => i === 'elephant');
const startsWithS = animals.findIndex(i => i[0] === 's');

//findIndex() returns index of first element that satisfies the condition in block.
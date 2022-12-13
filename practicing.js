const convertToBaby = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`baby ${arr[i]}`);
    }
    return newArr;
};

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 
const _ = {
  clamp (number,lower,upper) {
    let lowerClampedValue = Math.max(number,lower);
    let clampedValue = Math.min(lowerClampedValue,upper);
    return clampedValue;
  },
  inRange (number,startValue,endValue) {
    let lowerValue = 0;
    let upperValue = 0;
    if (startValue > endValue) {
      lowerValue = endValue;
      upperValue = startValue;
    } else if (endValue === undefined) {
      lowerValue = 0;
      upperValue = startValue;
    } else {
      lowerValue = startValue;
      upperValue = endValue;
    }
    if (number === upperValue) {
      return false;
    } else if (this.clamp(number,lowerValue,upperValue) === number) {
      return true;
    } else {
      return false;
    }
  },
  words (string1) {
    return string1.split(' ');
  },
  pad (string1,stringLength) {
    if (string1.length >= stringLength) {
      return string1;
    } else { 
      let totalPadding = stringLength - string1.length;
      let frontPad = Math.floor(totalPadding / 2);
      let backPad = Math.ceil(totalPadding / 2);
      let arr1 = string1.split('');
      for (i = 0; i < frontPad; i++) {
        arr1.unshift(" ");
      }
      for (i = 0; i < backPad; i++) {
        arr1.push(" ");
      }
      let newString = arr1.join("");
      return newString;
    }
  },
  has (obj,key) {
    if (obj[key]){
      return true;
    } else {
      return false;
    }
  },
  invert (obj) {
    let objKeys = Object.keys(obj);
    let objValue = Object.values(obj);
    for (let i in obj) {
      delete obj[i];
    }
    for (i = 0; i < objKeys.length; i++){
      obj[objValue[i]] = objKeys[i];
    }
    return obj;
  },
  findKey (obj,funcParameter) {
    let arr1 = Object.keys(obj);
    let arr2 = Object.values(obj);
    for (i = 0; i < arr1.length; i++) {
      if (funcParameter(arr2[i])) {
        return arr1[i];
        break;
      } else {return undefined};
    }
  },
  drop (arr,number=1) {
    let newArray = [];
    for (i = number; i < arr.length; i++) {
      newArray.push(arr[i]);
    }
    return newArray;
  },
  dropWhile (arr,funcParameter) {
    let i = 0;
    while (funcParameter(arr[i],i,arr) || i < arr.length) {
      arr.shift();
      i++;
    }
    return arr;
  },
  chunk (arr,size=1) {
    let arrayChunks = [];
    for (i = 0; i < arr.length; i += size) {
      let arrayChunk = arr.slice(i,i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};




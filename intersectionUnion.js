const intersectUnion = (arrA, arrB) => {
    let leftObj = {};
    let rightObj = {};
    let newArr = [];

    //loop through left arr
    for (let i = 0; i < arrA.length; ++i) {
        //if key at current value exists
        if (leftObj.hasOwnProperty(arrA[i])) {
            //add one to value
            leftObj[arrA[i]] += 1;
        }
        //else set value at key to 1
        else leftObj[arrA[i]] = 1;
    }

    //do the same for right array
    for (let i = 0; i < arrB.length; ++i) {
        //if key at current value exists
        if (rightObj.hasOwnProperty(arrB[i])) {
            //add one to value
            rightObj[arrB[i]] += 1;
        }
        //else set value at key to 1
        else rightObj[arrB[i]] = 1;
    }

    //loop through left object keys
    let leftKeys = Object.keys(leftObj);
    for (let i = 0; i < leftKeys.length; ++i) {
        //if other object has that key
        if (rightObj.hasOwnProperty(leftKeys[i])) {
            //take the lower value
            var times = rightObj[leftKeys[i]] < leftObj[leftKeys[i]] ? leftObj[leftKeys[i]] : rightObj[leftKeys[i]];
            //push the key to the new array x times(x = higher value)
        }
        else {      //if not in both arrays, just take times from left
            var times = leftObj[leftKeys[i]];
        }
        for (let j = 0; j < times; ++j) {
            newArr.push(parseInt(leftKeys[i]));
        }
        //set count for both arrays at that key to 0
        rightObj[leftKeys[i]] -= rightObj[leftKeys[i]]
        leftObj[leftKeys[i]] -= leftObj[leftKeys[i]]
    }

    let rightKeys = Object.keys(rightObj);
    for (let i = 0; i < rightKeys.length; ++i) {
        //if other object has that key
        if (rightObj.hasOwnProperty(rightKeys[i])) {
            //take the lower value
            var times = rightObj[rightKeys[i]] < leftObj[rightKeys[i]] ? leftObj[rightKeys[i]] : rightObj[rightKeys[i]];
            //push the key to the new array x times(x = higher value)

        }
        else {      //if not in both arrays, just take times from right
            var times = leftObj[rightKeys[i]];
        }
        for (let j = 0; j < times; ++j) {
            newArr.push(parseInt(rightKeys[i]));
        }
    }

    return newArr;
}


console.log(intersectUnion([5, 1, 1, 3, 4, 1, 2, 10], [3, 1, 1, 7, 5, 9]));
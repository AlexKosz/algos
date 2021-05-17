function intersection(arrA, arrB) {
    let intersections = [];
    do {
        if (arrA[0] < arrB[0]) { arrA.shift(); }       //if A smaller, remove first A
        else if (arrA[0] > arrB[0]) { arrB.shift(); }  //if B is smaller, remove first B
        else {                              //If one isnt greater than the other, they are equal
            intersections.push(arrA[0]);    //push first value of A into intersections
            arrA.shift()                    //remove first value of A
            arrB.shift();                   //remove first balue of B
        }
    } while (arrA.length > 0 && arrB.length > 0)

    return intersections;
}

console.log(intersection([2, 4, 7, 9, 10], [2, 3, 5, 7, 9, 10]));
console.log(intersection([1, 1, 4, 5, 8], [1, 1, 1, 5, 6, 8]));
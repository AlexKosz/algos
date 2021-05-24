const binToDec = (str) => {
    let sum = 0;                                                    //intialized for later
    for (let i = (str.length - 1); i >= 0; i--) {                   //loop through backwards
        if (str[i] = 1) {                                           //if the value at the current positon is 0, ignore it
            sum += str[i] * Math.pow(2, i)          //To the sum, add the value at the current position multiplied by 2 to the power of the current position
        }
    }
    return sum;                                     //returns as a NUMBER, not a string
}


const decToBin = (num) => {
    let bin = "";                           //initalize string to push binary characters into, could also be array
    do {                                    //do while instead of just while in case user wanted to find dec of 0 in binary... pointless but breaks if it was just a while loop
        bin += (num % 2)                    //push the remainder of num / 2 into the string for binary.
        num = Math.floor(num / 2)           //Cut num in half rounding down. eventually this will hit 0, terminating the loop
    } while (num != 0)

    return bin;                             //returns as a STRING, not a number
}


console.log(binToDec("11010101"))
console.log(decToBin(171))
console.log(decToBin(binToDec("11010101")))
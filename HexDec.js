const decToHex = (str) => {
    let sum = 0;

    for (let i = (str.length - 1); i >= 0; i--) {
        if (str[i] != 0) {
            if (str.charCodeAt(0) <= 57) {
                sum += str[i]
            }

            sum += str[i] * Math.pow(16, i)
        }

    }
    return sum;
}



const hexToDec = (str) => {
    let sum = 0;
    let j = 0;
    for (let i = (str.length - 1); i >= 0; i--) {
        if (str[i] != 0) {
            if (str.charCodeAt(i) <= 57) {
                sum = parseInt(sum) + (parseInt(str[i]) * Math.pow(16, j))
            }
            else {
                sum = parseInt(sum) + (((str.charCodeAt(i)) - 87) * Math.pow(16, j))
            }
        }
        j++;
    }
    return sum;
}

console.log(hexToDec("2f1"))

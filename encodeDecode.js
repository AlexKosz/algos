const encode = (str) => {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] == str[i]) {
            if (str[i + 2] == str[i + 1]) {
                let count = 2;
                for (count = 1; str.length; count++) {
                    if (str[i + count] != str[i]) {
                        break;
                    }
                }
                newStr += (str[i]) + count;
                i = i + (count - 1);
            }
            else {
                newStr += (str[i]);
            }
        }
        else {
            newStr += (str[i]);
        }
    }
    return newStr;
}

const decode = (str) => {
    let newStr = ""
    newStr += str[0];
    let i = 1;
    do {
        if ((parseInt(str[i])) > 0) {
            let count = 1
            if (parseInt((str[i] + 1))) {
                do {
                    count++
                } while ((parseInt(str[i + count])) > 0)

                let numStr = ""
                for (let x = i; x <= count; x++) {
                    numStr += str[x]
                }
                console.log(numStr)
                let numOfTimes = parseInt(numStr)
                for (let j = 0; j < numOfTimes; j++) {
                    newStr += str[i - 1]
                }
                i = i + (count - 1)
            }
            else {
                console.log("in else")
                let numOfTimes = parseInt(str[i])
                for (let j = 0; j < numOfTimes; j++) {
                    newStr += str[i - 1]
                }
                i = i + (count - 1)
            }
        }

        else {
            newStr += str[i]
        }
        i++

    } while (str[(i + 1)])
    return newStr;
}

console.log(decode("a23bc4a4"))

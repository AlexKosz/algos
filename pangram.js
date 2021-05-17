const isPangram = (str) => {
    var obj = {};
    var key = '';
    // newStr = '';         //if Object.keys(obj).length is not allowed, uncomment the lines. change line 14 to newStr.length
    str = str.toUpperCase();

    for (i = 0; i < str.length; i++) {
        key = str[i];
        if (!obj[key]) {
            obj[key] = key;
            // newStr = str[i] + newStr;
        }
    }
    // console.log(newStr)
    if (Object.keys(obj).length == 26) {
        return true;
    }
    else {
        return false;
    }
}



const isPerfectPangram = (str) => {
    var obj = {};
    var key = '';
    // newStr = '';                     //if Object.keys(obj).length is not allowed, uncomment the lines. change line 40 to newStr.length
    str = str.toUpperCase();
    for (i = 0; i < str.length; i++) {
        key = str[i];
        if (!obj[key]) {
            obj[key] = key;
            // newStr = str[i] + newStr;
        }
        else {
            return false;
        }
    }
    // console.log(newStr)
    if (Object.keys(obj).length == 26) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));
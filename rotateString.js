const rotateString = (str, num) => {
    for (let i = 0; i < num; i++) {
        let section = "";
        section += str[str.length - 1];     //store last character of string in a variable, here named "section"
        let newStr = ""
        for (let j = 0; j < (str.length - 1); j++) {    //store the string except for the last character and store in a seperate variable, here named "newStr"
            newStr += str[j]
        }
        str = section + newStr;     //combine the two variables, "moving" the variable with the last character to the front of the string
    }                               //repeat num times, this is how many it moves to the right
    return str;                     //return the rotated string
}

const isRotation = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
        let rotated = rotateString(str1, i)     //compare the first string to the rotation of of itself, each run rotating one more character than the last (run)
        if (rotated == str2) {
            return true                         //if the rotation of the first string matches the second string, return true
        }
    }
    return false;                               //if it makes it outside the for loop, no match was found. return false
}

console.log(rotateString("12345", 2));
console.log(isRotation("123", "312"))
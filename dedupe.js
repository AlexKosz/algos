const dedupe = (str) => {
    let chars = [];
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let matched = false;
        for (let j = 0; j < chars.length; j++) {
            if (str[i] == chars[j]) {
                matched = true
            }
        }
        if (!matched) {
            chars[chars.length] = str[i]
            newStr += str[i]
        }
    }
    return newStr
}

console.log(dedupe("abcdefabghidejkaaaaA"))
function concatenateStrings(str1, str2) {
    if (str1.length !== str2.length) {
        if (str1.length > str2.length) {
            str1 = str1.substring(0, str2.length);
        } else {
            str2 = str2.substring(0, str1.length);
        }
    }
    return str1 + str2;
}

let result = concatenateStrings('Hello', 'World');
console.log(result); // Outputs: 'HelloWorld'

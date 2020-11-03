const strSplit = (string, seperator, newArr) => {
    //base case
    if(string.indexOf(seperator) == -1){
        newArr.push(string);
        console.log(newArr);
        return newArr;
    }
    // recursive case
    newArr.push(string.slice(0, string.indexOf(seperator)));
    console.log(string);
    let newStr = string.slice(string.indexOf(seperator) + 1);
    console.log(newStr);
    return strSplit(newStr, seperator, newArr);
}

strSplit("02/20/2020", "/", []);
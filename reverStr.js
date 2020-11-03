function splitStr(word, newStr){
    let newStr = "";
    if(word.length === 1){
        newStr.push(word);
    }
    return newStr = word.slice(0,-1);
    
}
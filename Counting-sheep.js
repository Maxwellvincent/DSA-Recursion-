const countSheep = (num) => {
    if(num === 0) {
        return 'All sheep have jumped over the fence';
    } 
    
    return num + `: Another sheep jumped over the fence \n` + countSheep(num - 1);
    
}

console.log(countSheep(5));

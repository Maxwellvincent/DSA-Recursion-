const powerCalc = (b,e) => {
    if(e === 0 ){
        return 1;
    }
    return b * powerCalc(b, e - 1)
}

console.log(powerCalc(5,2));
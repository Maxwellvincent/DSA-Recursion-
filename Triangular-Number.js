function tri(n){
    if(n <= 1){
        return 1
    }
    return (n) + tri(n-1)
}
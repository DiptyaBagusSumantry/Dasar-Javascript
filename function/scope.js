//penempatan var pada global maupun lokal

function perulangan(n){
    if(n == 8) return;
    console.log(n);
    return perulangan(n+2);
}

console.log(perulangan(2));

function faktorial(n){
    if(n == 0) return 1;
    return n * faktorial(n-1);
}
console.log(faktorial(3));
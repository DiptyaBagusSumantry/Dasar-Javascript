function tambah(n){ //pengulangan dengan fungsi
    if(n == 10) return; // ini adalah base case dimana program akan berhenti
    console.log("data ke - "+ n);
    return tambah(n+2)
}
console.log(1);
console.log(tambah(2));

//menghitung total faktorial dengan fungsi
function faktorial(n){
    if(n == 0) return 1;
    return n * faktorial(n-1);
} 

console.log(faktorial(5));

//ini pake function looping
function cetakAngka(n){
    for( var i=n; i>= 1 ; i--){
        console.log(i);
    }
}
cetakAngka(5);

//ini faktorial pake looping
function faktorial(n){
    var hasil = 1;
    for( var i = n; i>0; i--){
        hasil *= i;
    }
    return hasil;

}
console.log('Looping Faktorial');
console.log(faktorial(5));
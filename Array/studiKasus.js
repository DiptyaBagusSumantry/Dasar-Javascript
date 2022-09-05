var penumpang = ['a',undefined,'c'];
var tambahPenumpang = function(namaPenumpang, kursi){
    if(kursi.length == 0){
        kursi.push(namaPenumpang);
        return kursi;
    } else {
       for(var i = 0; i <kursi.length; i++){
        if(kursi[i] == undefined){
            kursi[i] = namaPenumpang;
            return kursi;
        } else if( i == kursi.length -1 ) {
            kursi.push(namaPenumpang); 
            return kursi;
        } else if(kursi[i] == namaPenumpang ){
            console.log("sudah ada di dalam");
            return kursi;

        }
       }
    }
}

console.log(tambahPenumpang('masuk', penumpang));
console.log(tambahPenumpang('masuk', penumpang));
console.log(tambahPenumpang('masuk2', penumpang));

var penumpang= [];

function tambahPenumpang(namaPenumpang, kursi){
    if(kursi.length == 0){
        kursi.push(namaPenumpang);
        return kursi;
    } else{
        for(var i = 0; i<kursi.length; i++){
            if(kursi[i] == undefined){
                kursi[i] = namaPenumpang;
                return kursi;
            } else if(kursi[i] == namaPenumpang){
                console.log(kursi[i]+" sudah ada di dalam angkot");
                return kursi;
            } else if(i == kursi.length - 1){
                kursi.push(namaPenumpang);
                return kursi;
            }
        }
    }
}

function hapusPenumpang(namaPenumpang,kursi){
    if(kursi.length == 0){
        console.log("Penumpang kosong dan ngga ada yang turun");
        return kursi;
    } else{
        for(var j = 0; j<kursi.length; j++){
            if(kursi[j]==namaPenumpang){
                kursi[j] = undefined;
                console.log("sudah dihapus");
                return kursi;
            } else if( j == kursi.length -1){
                console.log("nama tersebut tidak ada di dalam angkot");
                return kursi;
            }
        }
    }
}
console.log(tambahPenumpang('adip', penumpang));
console.log(tambahPenumpang('as', penumpang));
console.log(hapusPenumpang('adip', penumpang)); 
console.log(tambahPenumpang('koli', penumpang));
console.log(tambahPenumpang('wkwkwk', penumpang));
console.log(hapusPenumpang('bagus', penumpang)); 
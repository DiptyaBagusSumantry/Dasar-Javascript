//manipulasi Array
//menambah isi array
var hari =[];
hari[0]='senin';
hari[1]='selasa';
hari[2]='rabu';

console.log(hari[2]);

//menghapus array
var hari = ['senin','selasa','rabu','kamis'];
hari[2]=undefined;
console.log(hari);

//Menampilkan array dengan perulangan for
console.log("ini menapilkan array dengan FOR")
var hari = ['senin','selsa','rabu','kamis','jumat'];
for(var i = 0; i<hari.length; i++){
    console.log(hari[i]);
}
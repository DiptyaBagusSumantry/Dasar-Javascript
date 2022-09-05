//method length untuk menghitung jumlah index

//method join
var hari = ['senin','selasa','rabu','kamis'];
console.log(hari.join());

console.log(hari.length);

//meethod push untuk menambah elemen array dari bawah/terakhir
//method pop untuk mengahpus elemen array dari bawah/ terakhir
hari.push('jumat','sabtu','minggu'); // bisa menambah lebih satu elemen
console.log(hari.join('=='));
hari.pop(); // hanya dapat mengahpus satu elemen
console.log(hari.join('---'));

//method unshift untuk menambah dari depan
console.log("ini Unshft dan shift");
hari.unshift('hari pertama','hari kedua');
console.log(hari.join(':::'));

//method shift untuk menghapus dari depan
hari.shift();

console.log(hari.join('---'));

//splice untuk menyisipkan di array
//dengan format (indexkeberapa, maudihapusbrpa, tambah elemen baru)
console.log("ini splice");
hari.splice(0,1,'hari pertama');
console.log(hari.join('==='));


//slice untuk mengiris sebuah array menjadi array baru
//dengan format slice(awal,akhir); index akhir tidak dibawa array baru
var hari2 = hari.slice(2,5);
console.log("ini pake slice "+hari2.join('---'));

//foreach untuk melakuan perulangan, tidak mengembalikan nilai
//forEach(data elemen, data indeks)
hari.forEach(function(e,i){ // e adalah elemen dan i adalah indeks
    console.log(i + e); // i adalah indekks dan e adalah ellemen
})
//menampilkan harinya saja
hari.forEach(function(e){
    console.log(e);
})

//map dapat mengembalikan nilai
var angka = [5,2,3,4,1,10,15,20];
var hasil = angka.map(function(e){
    return e * 2;
})
console.log(hasil.join('==='))

//sort untuk mengurutkan nilai
//mengurutkan dari nilai satuan
angka.sort();
console.log(angka.join('==='));

//mengurutkan dari nilai puluhan
angka.sort(function(a,b){
    return a-b;
})
console.log(angka.join('==='));

//filter mencari nilai pada array
//mengambalikan dengan array
var cari = angka.filter(function(e){
    return e >= 5;
})
console.log(cari.join('==='));

//find menemukan satu nilai saja
var cari = angka.find(function(e){
   return e >= 5;
})
console.log(cari);





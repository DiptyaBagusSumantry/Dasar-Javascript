//membuat obejek
var mhs = {
    //nama dan dan nim adalah properti
    // properti adalh variabel di dalam objek
    nama : "Diptya Bagus Sumantry",
    nim : 20102281,
    alamat : {
        jalan : "Jendral Sudirman No 100",
        rt : 01,
        rw : 03,
        kabupaten : "Banyumas",
        provinsi : "Jawa Tengah"
    },
    // sapa merupakan method
    // method adlah fungsi yang ada di dalam objek
    sapa : function(){ 
        return "hallo " + this.nama + " NIM kamu : " + this.nim ;
    }
};

console.log(mhs.sapa())
console.log(mhs.alamat.jalan)
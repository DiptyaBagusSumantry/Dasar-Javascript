function tambah(){ // menerima dan menampung argument tambah
    return arguments;
}

var arguments = tambah(5,10,20,"hi", false);//argument mengirimkan paramter
console.log(arguments);

function pertambahan(){ // nilai prameter berasal dari pemanggilan pertambahan(1,2,3,4,5);
    var hasil=0;
    for( var i=0; i<arguments.length; i++){ // length menghitung banyaknya argument
        hasil += arguments[i];
    }

    return hasil;
}

var coba = pertambahan(1,2,3,4,5); // paramter 1,2,3,4,5 merupakan argumnet
console.log(coba);
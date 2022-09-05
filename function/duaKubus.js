function volumeduaKubus(a,b){ //function declaration
    var total, volumeA, volumeB;
    
    volumeA = a*a*a;
    volumeB = b*b*b;
    total = volumeA + volumeB;
    return total;
}

console.log(volumeduaKubus(8,3)); //function experisson

var volume = function(a,b){ //fungsi exspression
    var total, volumeA,volumeB;

    volumeA = a*a*a;
    volumeB = b*b*b;
    total = volumeA + volumeB;
  
    return total;
}

console.log(volume(8,3));
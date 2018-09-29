//1. Menyusun Barisan Bintang

for(var a= 1; a <=5; a++){
  console.log("*")
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

for(var x = 0; x < 5;x++){
  var bintang = '';
  for(var xx = 0; xx < 5; xx++) {
    bintang += '*';
  } console.log(bintang)
}


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

for(var x = 0; x < 5;x++){
  var bintang = '';
  for(var xx = 0; xx <= x; xx++) {
    bintang += '*';
} console.log(bintang)
}





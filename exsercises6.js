//1. Melakukan Looping Menggunakan While

var love = 2
console.log('LOOPING PERTAMA')
while (love <= 20) {
  console.log(love + "- I love coding")

  love += 2

}

var become = 20
console.log('LOOPING KEDUA')
while (become >= 2){
  console.log(become + "- I will become fullstack developer")

  become -= 2
}


//2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA")
for (var x = 1; x <= 20; x++) {
  console.log(x + " - I love coding")
}
console.log("LOOPING KEDUA")
for(var y = 20; y>= 1; y--){
  console.log(y + ' - I will become fullstack developer')
}

//33. Angka Ganjil dan Genap


for(var z  = 1; z <= 100; z++) {
if( z % 2===0)
   console.log('GENAP');
    else
   	console.log('GANJIL');
}
//kelipatan 3

for(var z = 1; z < 100; z +=2){
  if(z % 3===0){
  console.log(z + 'KELIPATAN 3')}
}


//kelipatan

for(var z = 1; z < 100; z +=5){
  if(z % 6===0){
  console.log(z + 'KELIPATAN 6')}


//kelipatan 10

for(var z = 1; z < 100; z +=9){
  if(z % 10===0){
  console.log(z + 'KELIPATAN 10')}
}

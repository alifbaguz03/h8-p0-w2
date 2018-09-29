
function bandingkanAngka(angka1, angka2) {
  
  if(angka1 > angka2){
  	return false;
  } else if (angka1 < angka2){
  	return true;
  } else {
  	return -1
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

//pseudocode

// IF angka1 is greater than angka2
// 	DISPLAY false
// ELSE IF angka1 is smaller than angka2
// 	DISPLAY true
// ELSE 
// 	DISPLAY -1

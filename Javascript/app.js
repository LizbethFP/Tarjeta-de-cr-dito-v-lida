var srt = parseInt(prompt('Ingrese los números de su tarjeta de crédito'));
var srtToArray = srt.split(" "); //convirtiendo string en array
var arrayReverse = srtToArray.reverse();//revirtiendo array
function isValidCard (arrayReverse) {
  for (var i = 0; i<arrayReverse.length; i = i+2){//iterar pares
  var multiply = arrayReverse[i] x 2;//multiplicar por 2 los números pares
  var sum1 = ;
  var total = sum1%10
  }
  return total;
}

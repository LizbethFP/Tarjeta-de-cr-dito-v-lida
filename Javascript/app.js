var number = prompt('Ingrese los números de su tarjeta de crédito');
//1. Validación de no ingreso de campo vacío
if (number === ' ') {
  alert('No ha ingresado un número');
}
else {
  numberToArray;
}
/*Cuando logro aceptar números y quiero pasarlo a array
var n =  123456789;
var digits = (""+n).split("");*/

//2. Pasar números a array en orden inverso
var numberToArray = number.split(" "); //convirtiendo número(string)
var arrayReverse = numberToArray.reverse();//revirtiendo array;Desde aquí sí aplica

//3. Función
function isValidCard (arrayReverse) {
  var evenSum = 0;
  var unEvenSum = 0;
  for (var i = 1; i<arrayReverse.length; i = i+2){//iterar pares
        multiply = arrayReverse[i] x 2;//multiplicar por 2 los números pares (crear array pares)**
        //sumar si los dígitos son >=10**
        if (multiply>=10){
        checkDigits = (parseInt(multiply/10))+(multiply%10)
        };
        evenSum = arrayReverse[i]+checkDigits;//sumar todos los pares***
      {
      for (var j = i-1; j<arrayReverse.length; j = j+2){//iterar impares
      unEvenSum += arrayReverse[j];//sumar impares
      }
      var total = evenSum + unEvenSum//sumar pares e impares
      }
  }
  return total;
}
//comprobar si es una tarjeta válida
if (total%10 = 0){
alert('La tarjeta es válida')
}
else {
alert('La tarjeta no es válida')
}

/*Note:
var sum1 = arrayReverse[i]+(multiply/10)+(multiply%10); (usado previamente)

*/

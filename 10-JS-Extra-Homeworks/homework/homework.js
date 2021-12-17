// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = Object.entries(objeto);
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let arreglo = Array.from(string);
  let devuelve = {};
  arreglo.forEach(item => {
    if (devuelve[item]) {
      devuelve[item]++;
    }
    else {
      devuelve[item] = 1;
    }
  });
  console.log(devuelve);
  return devuelve;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let cadena = Array.from(s);
  let SM  = '';
  let sm  = '';
  
  cadena.forEach(item => {
    if (item.toUpperCase()===item) {
      SM+= item;
    } else {
      sm+= item;
    }
  });
  let cadena_final = SM+sm;
  console.log(cadena_final);
  return cadena_final;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arreglo = str.split(' ');
  let reversa = [];
  arreglo.forEach(item => {
    let palabra = '';
    for (let i = item.length - 1;i >= 0;i--) {
      palabra+= item[i];
    }
    reversa.push(palabra);
    palabra = '';
  })
  return (reversa.join(' '));
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let arreglo = Array.from(String(numero));
  let capicua = "No es capicua";
  for (let i = 0;i < arreglo.length;i++) {
    if (arreglo[i] === arreglo[arreglo.length-1-i]) capicua = "Es capicua";
    else capicua = "No es capicua";
  }
  return capicua;

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadena2 = '';
  for (let i = 0;i < cadena.length;i++ ){
    if (cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] ==='c') continue;
    else cadena2 = cadena2+cadena[i];
  }
  return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  arr.sort((a,b) => {
    if (a.length === b.length) return 0;
    if (a.length < b.length) return -1;
    return 1;
   });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arreglo3 = [];
  for (let pos_a1 = 0; pos_a1 < arreglo1.length; pos_a1++) 
      {
        for (let pos_a2 = 0; pos_a2 < arreglo2.length; pos_a2++ ) 
        {
          if (arreglo1[pos_a1] === arreglo2[pos_a2]) {
              arreglo3.push(arreglo1[pos_a1]);
            }
        }
      }
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


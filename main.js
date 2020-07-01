//JS1//
let salir = false;
let array1 = [];

while (!salir) {
  let numero = prompt('Ingrese un número');

  if (!isNaN(parseInt(numero))) {
      array1.push(parseInt(numero));
  }else{
    if (numero == "") {
      salir = true;
      //promedio//
      let sum = 0;
      let prom = 0;
      for (let i = 0; i < array1.length; i++){
        sum += array1[i];
        prom = sum / array1.length;
      }
      console.log('Promedio =', prom); 
      //orden de numeros // 
      array1.sort((a, b) => a - b); 
      // numero menor // 
      let lower_num = Math.min.apply(null,array1);
      console.log('numero menor =' ,lower_num);
      //numero mayor // 
      let higher_num = Math.max.apply(null,array1);
      console.log('numero mayor =' , higher_num);
      //mediana//
      let lowMiddle = Math.floor((array1.length - 1) / 2);
      let highMiddle = Math.ceil((array1.length - 1) / 2);
      let middle = (array1[lowMiddle] + array1[highMiddle]) / 2;
      console.log( 'la mediana es = ' , middle);
    }
  }
}console.log(array1);

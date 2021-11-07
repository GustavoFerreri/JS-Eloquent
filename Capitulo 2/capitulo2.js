// Nos concentramos en la pagina 34, donde plantea las expresiones sin sentido
1;
!false;

// Para vincular o declarar una variable, se utiliza la palabra reservada let
// que atrapa o vincula la variable con una expresion 
let x = 1;
let suma = 1 + 1;

// Creamos una funcion range
function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

// Como toda variable puede asumir cualquier valor
// Segun determina el texto no se debe asociar a una caja sino mas bien a un contenido que se agarra
// Prueba
let texto = "Hola";
console.log(texto);
texto="Adios";
console.log(texto);

// Puede vincularse mas de una variable por asignacion de LET
let y = 1, z = 2;
console.log(y + z);

// Puedes tener una vinculasion sin asignacion, por lo que retornaria undefined
let a;

// Var se utiliza previo al 2015, pero la propiedades varian respecto de la actual version
// const se utiliza para declarar una constante
// las variables no pueden iniciar por un numero

// La vinculacion prompt usa una funcion para pedirle al usuario que ingrese un valor
// prompt("Ingrese un valor");
// // que podemos asociar a una variable
// let valor = prompt("Ingrese un valor");
// Cuando llamamos a una funcion tambien se puede indicar como que se la invoca, o aplicamos

// Cuando la funcion devuelve un valor, indica es un retorno
console.log(Math.max(0,2,3,4,5,6,7,8,9,10,11,12,13));
console.log(Math.min(0,2,3,4,5,6,7,8,9,10,11,12,13));

// Podemos tener una ejecuicion l;ineal del programa
// Por ejemplo
// let valor3 = prompt("Ingrese un valor");
// console.log(valor3 * 2);

// Y por otro laado tenemos una bifurcacion o ejecucion condicional kque modifica el flujo del programa
// let valor4 = prompt("Ingrese un valor");
// if (valor4 > 0) {
//     console.log(valor4 * 2);
// }
// else {
//     console.log(valor4 * 3);
// }
// El iif puede ser declarado en una sola linea
// if(valor4>0) console.log(valor4 * 2);
// else console.log(valor4 * 3);

// Ahora nos toca ciclos en esta parte del capitulo
// Menciona tres ciclos for, while, do while
// el primero que muestra es ek while, con el siguiente ejemplo
let num=0;
while(num<10){
    console.log(num);
    num++;
}
// En el segundo caso utiliza un ciclo, tambien while para realizar una potencia de 2, en el ej, elevado a la 10
let num2=0;
let res2=0;
while(num2<10){
    res2=res2*2;
    num2++;
}
console.log(res2);
// Por ultimo en esta parte utiliza un do while de forma muy interesante, para verificar si se ingresa o no un string
// let nom;
// do {
//     nom = prompt("Ingrese un nombre");
// } while (!nom);
// console.log(nom);

// La indentandion es importante, para que el codigo sea legible, pero no es de uso obligatorio por el codigo
//  queda un ciclo por delante es es el for
for(let i=0;i<10;i++){
    console.log(i);
}

// Rompiendo un ciclo, breack
// En este caso el texto presenta un ciclo for, infinito, cuya pauta es mostrar un numero mayor a 20 divisible por 7
for(let i = 20; ; i++) {
    if (i % 7 == 0) {
        console.log(i);
        break;
    }
}
// En el caso se usa el modulo, o el resto de la division para saber si es divisible por el numero consultado, ye el resto es igual a 0
// En el caso anterior si no usaramos el break, el cicloo seria infinito
// Existe otra palabra reservada dentro de los ciclos,que es continue, que permite continuar con el ciclo

// Manera sucinta: expresadop de manera abreviada, sencilla
// Por ejemplo:
//  contador += 1
//  contador = contador + 1
//  conntador++
//  contador--

// Una opcion para seleccionar un condicional con multiples condiciones, es switch, pero no es muy utilizado

// Lo que podemos usar para declarar las variables snake_case, o camelCase

// Ejercicios post capitulo
// Ciclo de triangulo
let numeral= "";
for (let i = 0; i < 7; i++) {
    console.log(numeral += "#");
}

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


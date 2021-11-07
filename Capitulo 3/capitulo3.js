// Funciones

// En este caso la funcion requiere de una variable
const cuadrado = function(x) {
  return x * x;
}
console.log(cuadrado(4));

// pero puede suceder que la funcion no requiera de una variable
const hacerRuido = function() {
    console.log("Hola");
    }

// o tener mas un parametro
const exponente = function(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

console.log(exponente(2, 3));


/*
    Toca un tema que vincula el alcance de las variables (vinculaciones) y las funciones
    Dejando en claro dos unas globales y otras locales
    Globales: las podes llamar en cualquier parte del programa
    Locales: las podes llamar dentro de una funcion

    Diferencia entre declaraciones
    Let y Const (let es una variable que puede cambiar de valor), son de ambito donde se ejecutan,
    Var (var es una variable que puede cambiar de valor y de ambito global)
*/
// Ejemplo
let x=10;
if(true){
    let y=20;
    var z=30;
    console.log(x+y+z);
}
console.log(x+z);
// Podemos observar que en la siguiente secuencia de codigo, y no esta definida y la consola nos acusa este error
// console.log(y+x); 
// Comentamos para poder seguir con los otros ejemplos

// Las variables y sobre todo las funciones pueden ver la variable mas cercana que las globales
const dividirPorDos = function(numero) {
    return numero / 2;
}
let numero= 10;
console.log(dividirPorDos(100));

// Alcance anidado
const humus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 's';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, 'can', 'chickpeas');
    ingredient(0.25, 'cup', 'water');
    ingredient(0.25, 'cup', 'lentils');
}
// Al alcance de este estilo se le llama alcance lexico

/*
    Dos maneras de declarar las funciones
    - nombreFuncion = function() {
    - function nombreFuncion() {
    la diferencia que esta ultima, puede ser declarada en cualquier ubicacion del codigo
    en lugar de ser ante puesta a su utilizacion, lo que permite cierta libertad de acomodar el codigo de diferente manera

    PERO EXISTE UNA TERCERA FORMA DE DECLARAR UNA FUNCION
    => arrow
*/

// Ejemplo de arrow
const sumar = (a, b) => a + b;

// Este metodo se aplico a partir del 2015 para reducir la verbosidad de las funciones

// En el caso de que la funcion solicite un parametro y reciba de mas, los restantes seran ignorados
// Por el cotnrario si recibe de menos sera colocados como indefinidos

// por ejemplo
function menos (a, b) {
    if(b===undefined){
        return -a;
    }
    return a - b; 
}

console.log(menos(10));
console.log(menos(10, 5));

// De igual manera podemos colocar un argumento opcional al parametro de la funcion, en caso de no ser definido asuma ese valor

// Ejemplo
function menos (a, b = 0) {
    return a - b;
}
console.log(menos(10));
console.log(menos(10, 5));

/*  
    Cierre
    La funcion no puede ser llamada nuevamente
    La funcion no puede ser llamada antes de que se haya creado
    pero algo interesante de este apartado es una funcion que recicla codigo para multiplicar con un solo argumento
*/

// Ejemplo
function multiplicar(factor) {
    return numero => numero * factor;
}
let duplicar = multiplicar(2);
console.log(duplicar(5));

// Veamos otra variante
function restar(a) {
    return numero=> numero - a;
}
let restoDos = restar(2);
console.log(restoDos(10));

/*  En ele ejemplo anterior, debemos analizarlo de la siguiente manera el entorno de a esta ligado a la llamada realizada por retar(2), y cuando es llamada por duplicar, 
o en este caso restaDos */
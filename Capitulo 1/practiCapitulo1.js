// Vamos a practicar el uso de comillas invertidas junto al simbolo de pesos
let texto = 'Hola mundo';
console.log(`Probando uso de comillas invertidas ${texto}`);

// Operadores Unarios, es decir de un solo termino
// En este caso usamos \n para realizar un salto de linea
console.log(`\nOperadores Unarios`);
console.log(typeof('menu'));
console.log(typeof(1));

// Operadores booleanos
console.log(`\nOperadores booleanos`);
// Opewrador and
console.log(true && true);
// Operador or
console.log(true || false);
console.log(2<3);
console.log(2>3);

// Por ultimo el operador ternario
// O condicional
console.log(`\nOperador ternario`);
console.log(2>3 ? 'Es mayor' : 'Es menor');
console.log(true? true : false);
console.log(true? 1 : 2);

// operadores null o indefinidos, conversion automatica por parte de javascript
console.log(`\nOperadores null o indefinidos`);
console.log(null==undefined);
console.log(null!=undefined);
console.log(''==0);
console.log(''==false);
console.log(''==null);

// Operador de corto circuito
console.log(`\nOperador de corto circuito`);
console.log(true && console.log('Hola mundo'));
console.log(null||'Hola');
console.log('hola'&&'');

// Resumen del capitulo
// 4 tipos de valores
//      - String
//      - Number
//      - Boolean
//      - Valores indefinidos
// No se asigna el tipo si no es detectado por el mismo javascript
// Vimos operadores
//     - Aritmeticos
//     - Logico
//     - Relacional
//     - Asignacion
//     - Concatenacion
//     - Operadores unarios
//     - Operadores binarios
//     - Operadores ternarios
//     - Operadores de corto circuito
//     - Operadores null o indefinidos

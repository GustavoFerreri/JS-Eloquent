// Creamos una funcion factorial
function factorial(n) {
    // verificamos si el n es igual a 0, y devuelve 1
    if (n == 0) {
        return 1;
    } else {
        // basicamente repetira la funcion hasta que n sea igual a 1 ya que devolvera 1
        return n * factorial(n - 1);
    }
}
// Mostramos por pantalla la funcion factorial 
console.log(factorial(5));

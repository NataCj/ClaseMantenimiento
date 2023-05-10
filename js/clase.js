console.log("Hola bienvenido js")
//  alert se puede imprimir 
// VARIABLES
const name = "NataliaCardenas"; //es cte nunca va a cambiar
var x = "Valor"; //la variable sea global
let y = "Valor";

let a = 20;
let b = 5.4;
let string = "Mi nombre es Natalia";
let number = "023455";
let boolean_uno = false;
let boolean_dos = true;

let array =[1,2,3,4,5];
let array_string = ["lunes","martes","miercoles","Jueves","Viernes"];

//Operadores aritmetricos: +,-,*,/,%

let suma = 1+5+a;
let resta =1-5-a;
let division = 1/5/a;
let multiplicacion= 1*5*a;
let module = 10%2;
let elev =5^2;
console.log("-"+suma+"\n-"+resta+ "\n-"+division+"\n-"+module+ "\n-"+multiplicacion+ "\n-"+elev);

//OPERADORES DE COMPARACION = / == / === / <> / >= / <= / > / <

//OPERACIONES LOGICOS AND && / OR || /

if(10>5){
    for(let i=0; i<array_string.length; i++){
        console.log(array_string[i]);
    }
}
let j = 5;
let k = 10;
while(k>=j){
    console.log("ENTRA");
    j++;
}
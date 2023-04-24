//SCOPE: es el alcance que una variable tendra en tu codigo. en otras palabras , el scope decide a que varibales 
//tiene acceso  en cada parte del codigo

alert("Soy hacker");
var numero=2;
let numero2=3;

let resultado=numero+numero2;
alert(resultado);

function salir(){
    let on = true;
    return on;
}
//condicionales
let a=45;
let b=50;

if(a<b){
    console.log("el numero: "+a+" es menor que "+b)
}else if(b>a){
    console.log("el numero: "+b+" es mayor que "+a)
}

//ciclos : for,while,do-while

//ciclo for
console.log("ciclo for");
for(let i=0; i<=10; i++){
    console.log(i);
}

//ciclo while
let i=0;
console.log("ciclo while");
while(i<=10){
    console.log(i);
    i++;
}

//ciclo do-while
console.log("ciclo do-wile");
i=0;
do{
    console.log(i);
    i++;
}while(i<=10);


console.log("--Manejo de String--");
let saludo = "Hola Mundo !";
//encontrar un caracter, si no lo encuentra pone -1, si lo encuentra pone el numero de ubicacion
console.log(saludo.indexOf("X"));
//String inicia o termina
console.log(saludo.startsWith("H"));
console.log(saludo.endsWith("!"));

//si el string incluye cierto caracter o palabra
console.log(saludo.includes("S"));

console.log("--operadores--");
//operador AND(&&) si la primera devuelve b si a y b son verdaderos, sino a 
console.log(45 && false)
console.log(50 && "10")
//operador OR (||) devuelve a (si es verdadero), o si no, b
console.log(false  || "verdadero")
console.log("10" || 10)

let isCorrect = true;
const doTask = () => "ok!";
console.log(isCorrect && doTask())

console.log("--Arreglos y Objetos--")
let instructores = ["Juan","Jesus", "Carla"];
console.log(instructores[2]);

const tecnico = {
    name: "Programacion de software",
    time: "1 año",
    practicas: true
}
console.log(tecnico.name)
console.log(tecnico.time)

console.log("--Interpolacion de variables--")

const data = `Soy un texto combinado con variables ${tecnico.practicas} como esta y esta ${instructores}`;
console.log(data)

//Funcion: Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea
//o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver
// una salida donde hay alguna relación obvia entre la entrada y la salida.


//hay varias formas de hacer funciones js
console.log("--Funciones--")
function sumar(x,y){
    let suma = x + y;
    console.log("La suma es: "+suma);
}
sumar(5,20);
//funcion de flechas
const saludar = (instruc) => {
    let i=0
    while(i<=instruc.length){
        console.log("hola profesor " + instruc[i]);
        i++;
    }
}
saludar(instructores);

console.log("***--- Spread y Rest ---***");
        //rest: junta los elementos en un arreglo
        function saludarRest(saludo, ...nombres){
            for(i in nombres){
                console.log(`${saludo} ${nombres[i]}`);
    }
}
saludarRest("hola", "fernando","javier","maritza","teo");

//Spread: esparce los elementos como si fueran enviados en forma separada
function saludarSpread(saludo, ...nombres){
    console.log(`${saludo} ${nombres},`);
}
    let personas=["maria","juan","pedro","julian"];
    saludarSpread("hola", personas);


    //otro ejemplo de Spread
    let partes =["piernas","brazos"];
    let cuerpo =["cabeza","cuello", ...partes,"pies","cabello"]
    console.log(cuerpo)

//clases: es una plantilla, defines las propiedades y metodos de un objecto. se puede reutilizar por medio de instancia.
//cada clase una tiene sus propiedades y metodos
//todas las clases tienen un constructor donde se definen datos iniciales.
console.log("***---clases---***")
class persona{
constructor(nombre, edad, sexo){
    this.nombre=nombre;
    this.edad= edad;
    this.sexo=sexo;

}getName(){
    console.log("tu te llamas " + this.nombre)
}
getAllinfo(){
    console.log(`tu nombre es ${this.nombre} tienes ${this.edad} años y eres un(a) ${this.sexo}`)
    }
}

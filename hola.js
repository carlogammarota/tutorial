

//Para ejecutar este codigo ir al directorio en donde esta este archivo desde la Terminal (CMD) y escribir lo siguiente: node main.js


//Aca explico las variables arrays objetos en programacion


// Esto es un Array
const alumnos = ["Jorge", "Pepe", "Juan"]

//Esto es una variable 
const cedas = "soy una ceda";

// Esto es un Objeto
const autos = {
    mercedes: {
        luz: "Roja",
        ruedas: "Al Piso",
        asientos: "Neopren",
        gastoNafta: 4000,
        valorAuto: 3000
    },
}

//Esto es un BUCLE
for (let index = 0; index < alumnos.length; index++) {
    // const element = array[index];
    // console.log("soy un FOR", index)

    console.log(alumnos[index])
}


//Esto es una Funcion

function suma(){
    console.log("Esta es la funcion Suma")
    // console.log(autos.mercedes.gastoNafta + autos.mercedes.valor)
}


//Esto llama a la funcion Suma
suma()

//Estos son Condicionales
if(4 > 3){
    console.log("4 es mayor que 3")
}else{
    console.log("4 no es mayor que 3")
}


//Aqui puedes imprimir el codigo con console.log("Estos son los alumnos: ", alumnos)

console.log("Estos son los alumnos: ", alumnos)
console.log("Esta es una variable que contiene un texto:", cedas)
// console.log()
// console.log(autos.mercedes.valorAuto + autos.mercedes.gastoNafta)



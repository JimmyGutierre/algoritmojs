//Crear un algoritmo donde esten listados 10 pacientes de un hospital.
//se debe crear una funcion donde se recorran los pacientes, si uno de sus nombre empieza con C, decirle que no puede pasar,
//si empieza con A decirle que espere, y si empiemza con otra letra dejalo pasar

console.log("--actividad en clase---");
let pacientes = ["Juan", "Carlos", "Ana", "Diego", "Marta", "Camila", "Luis", "Alicia", "Pedro", "Sofía"];

function recorrerPacientes() {
    for (let i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i];
        if (paciente.startsWith("C")) {
            console.log(paciente + " no puede pasar");
        } else if (paciente.startsWith("A")) {
          console.log(paciente + " debe esperar");
        } else {
          console.log(paciente + " puede pasar");
        }
      }
  }
  recorrerPacientes();
//antes
const numero0 = 0;
//Ahora
// const numero = 0;
const numero: number = 0;

//let numero: number = 0;
//let nombre: string = 'Adrian'




//DUCK TYPING
// infiriendo el tipo de dato
let nombre = 'Adrian';
// nombre = 1; ERROR



let fecha: Date // Date -> Clase
                // Tipo de dato "Date"
fecha = new Date(); // new date es una instancia
let adrian: Estudiante;
interface Estudiante{
    nombre: string;
    edad: number;
}
adrian = {
    nombre: 'Miguel',
    edad: 18,
};




function holaMundo(): void { // void porque no devuelve nada
    console.log('Hola');
}

function mensaje (nombre: string): void {
    console.log('Hola', nombre)
}

function calculadora (
    numUno: number,
    ...numeros: number[]
): number
{
    console.log('Hacer calculadora')
    return numUno;
}



function universidad(
    nombre: string,
    edad?: number, // OPCIONAL
): string {
    return `${nombre} Edad: ${edad}`;
}

universidad('adrian');

//universidad('adrian',2)

interface Departamneto{
    nombre: string;
    id: number;
    facultad: Facultad | number;
}

interface Facultad {
    nombre: string;
    id: number;
}

const departamentoSistemas = {
    nombre: 'Sistemas',
    id: 1,
    facultad: { // cuando la facultad esta relacionada
        nombre: 'Sistemas',
        id: '1',
    }
}

const departamentoSistemasSinRelaciones: Departamneto = {
    nombre: 'Sistemas',
    id: 1,
    facultad: 1
};

function imprimirDepartamento(
    departamento: Departamneto
) {
    // const departamentoId = departamento.facultad as number + 1;
    //const departamentoId = <number>departamento.facultad + 1;
   //const departamentoId = departamento.facultad + 1;

}

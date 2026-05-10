let turno = 'X';

let ganadorX = false;
let ganadorO = false;

let ganadoras = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]] // posiciones ganadoras

let tableroLogico = ['', '', '', '', '', '', '', '', ''];

let elementoSeleccionado = document.querySelector('.celda');
let celdas  = document.getElementsByClassName('celda');

let tablero = document.getElementById("tablero");

let turnoSiguiente = document.getElementById('turnoSig'); // donde va a poner el turno siguiente
let estado = document.getElementById('estado');


tablero.addEventListener('click', seleccionarCelda);

function seleccionarCelda(e){
    let celda = e.target; // obtiene la celda y toda su informacion
    let currenCeldaIndex = celda.dataset.index; //obtiene el indice de la celda actual

    if(celda.innerHTML === ''){ // si no hay nada poner el turno siguiente
        celda.innerHTML = turno; // pone la figura actual
        tableroLogico[currenCeldaIndex] = turno; // guarda el turno para saber mas a delante quien es el ganador
        if(turno === 'X'){   // verifica cual es el siguiente turno a mostrar
            turno = 'O'
            turnoSiguiente.innerHTML = turno
        }else{
            turno = 'X'
            turnoSiguiente.innerHTML = turno

        }
    }
    verificarGanador();
    
}

function verificarGanador(){

    for(let i = 0; i< ganadoras.length; i++){ // verifica si alguien ya gano antes de
        if(tableroLogico[ganadoras[i][0]] === 'X' && tableroLogico[ganadoras[i][1]] === 'X' && tableroLogico[ganadoras[i][2]] === 'X'){
            ganadorX = true;
        }else if(tableroLogico[ganadoras[i][0]] === 'O' && tableroLogico[ganadoras[i][1]] === 'O' && tableroLogico[ganadoras[i][2]] === 'O'){
            ganadorO = true;
        }
    }

    if(ganadorO){
            estado.innerHTML = "<h2>Ganador : O</h2>";
    }else if(ganadorX){
            estado.innerHTML = "<h2>Ganador : X</h2>";
    }

}





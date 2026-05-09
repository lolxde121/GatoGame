let turno = 'X';

let juegoActivo = true;

let ganadoras = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]] // posiciones ganadoras

let tableroLogico = ['', '', '', '', '', '', '', '', ''];

let elementoSeleccionado = document.querySelector('.celda');
let celdas  = document.getElementsByClassName('celda');

let tablero = document.getElementById("tablero");

tablero.addEventListener('click', seleccionarCelda);

function seleccionarCelda(e){
    let turnoSiguiente = '';
    let celda = e.target; // obtiene la celda y toda su informacion
    let currenCeldaIndex = celda.dataset.index; //obtiene el indice de la celda


    if(celda.textContent === ''){ // si no hay nada poner el turno siguiente
        turnoSiguiente = document.getElementById('turnoSig');
        celda.textContent = turno;

        if(turno === 'X'){   // 
            turno = 'O'
            turnoSiguiente.innerHTML = turno
        }else{
            turno = 'X'
            turnoSiguiente.textContent = turno

        }
        
    }
    
}

function verificarGanador(){

}





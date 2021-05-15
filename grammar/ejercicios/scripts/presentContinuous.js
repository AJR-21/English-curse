var correct = 0;
var incorrect = 0;
var contador = 0; 
var clase = document.getElementsByClassName('question');
var boton = document.getElementsByClassName('button');
var score = document.getElementById('score');
var mistake = document.getElementById('mistake');

//función que oculta los ejercicios
function ocultarEjercicios(){
    
    for(var i =  0; i < clase.length; i++){
        if( i > 0){
            clase[i].style.display = "none";
        }
    }
    
}
//función que mueve al siguiente ejercicio
function nextQuestion(){
    if (contador < clase.length - 1){
        clase[contador].style.display = 'none';
        contador++;
        clase[contador].style.display = 'block';
    } else if (contador === 9){

    }
    
    

}
//función que hace retornar al ejercicio anterior
function beforQuestion(){
    if (contador != 0){
        clase[contador].style.display = 'none';
        contador--;
        clase[contador].style.display = 'block';
    }

}
//función para chequear las respuestas
function checkAnswer(){
    score.innerHTML = "0";
    mistake.innerHTML = "0";
    var answer =[1, 6, 11, 12, 18, 23, 24, 29, 34, 39];
    for (var i = 0; i < boton.length; i++){
        for(var j = 0; i < answer.length; j++){
            if(boton[i] === boton[j]){
                boton[i].addEventListener('click', correctAnswer)

            }
        }   
    }
        


}

function correctAnswer(){
    var contar = 0;
    if(contar < clase.length) {
        correct++;
        score.innerHTML = correct.toString();
        contar++;
        Swal.fire({
            icon: 'success',
            title: 'GOOD JOB'
        })
    }
    if(contar === 9){
        if (correct === 10){
            Swal.fire({
                icon: 'success',
                title: 'EXELENT' + correct.toString() + '/10',
                text: 'You are the best'
            })
        } else if(correct > 5){
            Swal.fire({
                icon: 'success',
                title: 'WELL DONE' + correct.toString() + '/10',
                text: 'Keep improving'
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'FAIL' + correct.toString() + '/10',
                text: 'Never give up'
            })
        }
    }
}

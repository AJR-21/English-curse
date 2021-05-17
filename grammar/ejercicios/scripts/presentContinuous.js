var correct = 0;
var incorrect = 0;
var contador = 0; 
var clase = document.getElementsByClassName('question');
var boton = document.getElementsByClassName('button');
var score = document.getElementById('score');
var mistake = document.getElementById('mistake');
var questions = [1, 6, 11, 12, 18, 23, 24, 29, 34, 39];

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
        if (correct === 10){
            Swal.fire({
                icon: 'success',
                title: 'EXELENT!! ' + correct.toString() + '/10',
                text: 'You are the best'
            })
        } else if(correct > 5){
            Swal.fire({
                icon: 'success',
                title: 'WELL DONE!! ' + correct.toString() + '/10',
                text: 'Keep improving'
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'FAIL!! ' + correct.toString() + '/10',
                text: 'Never give up'
            })
        }
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
// para chequear las respuestas
for(var j = 0; j < questions.length; j++){
    boton[questions[j]].addEventListener('click', correctAnswer)

}
for(var i = 0; i < boton.length; i++){
    if(i != 1 & i != 6 & i != 11 & i != 12 & i != 18 & i != 23& i != 24 & i != 29 & i !=34 & i !=39){
        boton[i].addEventListener('click', incorrectAnswer)
    }
}
function correctAnswer(){
    correct++;
    score.innerHTML = correct.toString();
    Swal.fire({
        icon: 'success',
        title: 'GOOD JOB'
    })    
}
function incorrectAnswer(){
    incorrect++;
    mistake.innerHTML = incorrect.toString();
    Swal.fire({
        icon: 'error',
        title: 'WRONG'
    })
}

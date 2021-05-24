
var contador = 0;
var correct = 0;
var incorrect = 0;
var question = document.getElementsByClassName('question')
var answer = document.getElementsByClassName('answerPs')
var score = document.getElementById('score')
var mistake = document.getElementById('mistake')
var list = [1, 3, 8, 9, 13, 15, 20, 21, 26, 28]
//para ocultar los ejercicios
function ocultarEjercicios(){
    
    for(var i =  0; i < question.length; i++){
        if( i > 0){
            question[i].style.display = "none";
        }
    }
}
//función que mueve al siguiente ejercicio
function nextQuestion(){
    if (contador < question.length - 1){
        question[contador].style.display = 'none';
        contador++;
        question[contador].style.display = 'block';
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
        question[contador].style.display = 'none';
        contador--;
        question[contador].style.display = 'block';
    }

}
//para chequear las respuestas
for(var j = 0; j < list.length; j++){
    answer[list[j]].addEventListener('click', correctAnswer)

}
for(var i = 0; i < answer.length; i++){
    if(i != 1 & i != 3 & i != 8 & i != 9 & i != 13 & i != 15 & i != 20 & i != 21 & i !=26 & i !=28){
        answer[i].addEventListener('click', incorrectAnswer)
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
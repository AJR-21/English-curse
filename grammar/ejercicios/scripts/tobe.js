var contador = 0;
var correctas;
//function for positive question, verificar respuesta
function checkAffirmativeTest(){  
    var answer = document.getElementsByClassName('answer');
    var error = document.getElementsByClassName('error');
    
    for (var i = 0; i < 10; i++){

        switch (i){
            case 0:
                var x = document.f1.q1;
                question(x, i, 0, answer, error[0], error[1])
            break;   
            case 1:
                var x = document.f1.q2;
                question(x, i, 1, answer, error[2], error[3]);
            break;
            case 2:
                var x = document.f1.q3;
                question(x, i, 0, answer, error[4], error[5]);
            break;
            case 3:
                var x = document.f1.q4;
                question(x, i, 0, answer, error[6], error[7]);
            break;
            case 4:
                var x = document.f1.q5;
                question(x, i, 0, answer, error[8], error[9]);
            break;
            case 5:
                var x = document.f1.q6;
                question(x, i, 0, answer, error[10], error[11]);
            break;
            case 6:
                var x = document.f1.q7;
                question(x, i, 0, answer, error[12], error[13]);
            break;
            case 7:
                var x = document.f1.q8;
                question(x, i, 0, answer, error[14], error[15]);
            break;
            case 8:
                var x = document.f1.q9;
                question(x, i, 0, answer, error[16], error[17]);
            break;
            case 9:
                var x = document.f1.q10;
                question(x, i, 0, answer, error[18], error[19]);
            break;
        }
        
        
    }  
    correctas = contador* 100 / 10;

    if(contador === 10){
        Swal.fire({
            icon: 'success',
            title: 'PERFECT!! ' + contador +'/10',
            text: 'You are so smart',
            allowOutsideClick: false
        })

    } else if (contador > 5){
        Swal.fire({
            icon: 'success',
            title: 'GOOD JOB!! ' + contador +'/10',
            text: 'Keep improving',
            allowOutsideClick: false
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'FAIL!! ' + contador +'/10',
            text: 'Never give up',
            allowOutsideClick: false
        })
    }
    contador = 0;

}

function question(x, i, n, answer, error1, error2){
    //x is the name of radio n is the firts error value (1, 2, 3)
    for (var j = 0; j < x.length; j++){
        if(x[j].checked){
            if(x[j].value === 'true'){
             contador++;
             correct(answer[i]);
             
            } else {
                if(j === n){
                    incorrect(error1);
                } else {
                    incorrect(error2);
                }
            }
        } 
    }
}

function correct(clase) {
    clase.style.color = "blue";
    clase.style.fontWeight = 'bold';
}
function incorrect(e){
    e.style.color = "red";
    e.style.fontWeight = 'bold';
}
//muestra las respuestas correctas
function showAnswer(){
    var x = document.getElementsByClassName('answer');
    for (var i = 0; i < x.length; i++){
        x[i].style.color = "blue";
        x[i].style.fontWeight = 'bold';
    }
    Swal.fire({
        icon: 'question',
        text: 'If you do not remember all, you must review the theory'
        })
    
}
//intentar de nuevo
function tryAgain(){
    var x = document.getElementsByClassName('answer');
    var y = document.getElementsByClassName('error');
    for(var i = 0; i < x.length; i++){
        x[i].style.color = 'black';
        x[i].style.fontWeight = 'normal';
    }

    for(var j = 0; j < y.length; j++){
        y[j].style.color = 'black';
        y[j].style.fontWeight = 'normal';
        y[j].unchecked;
    }

    Swal.fire({
        icon: 'info',
        backdrope: true,
        title: 'Practice makes perfect!!',
        allowOutsideClick: false
    })
}

//function for negative sentences check
function checkNegativeTest(){

    for(var i = 0; i < 10; i++){
        var n = 'nq' + i.toString();
        switch(i){
            case 0: 
                checkValidate('3', n);
            break;
            case 1: 
                checkValidate('2', n);
            break;
            case 2: 
                checkValidate('2', n);
            break;
            case 3: 
                checkValidate('2', n);
            break;
            case 4: 
                checkValidate('3', n);
            break;
            case 5: 
                checkValidate('3', n);
            break;
            case 6: 
                checkValidate('1', n);
            break;
            case 7: 
                checkValidate('3', n);
            break;
            case 8: 
                checkValidate('2', n);
            break;
            case 9: 
                checkValidate('3', n);
            break;
            default:
                Swal.fire({
                    text:'that option does not exist'
                })
            break;         
                
        }

    }
    if(contador === 10){
        Swal.fire({
            icon: 'success',
            title: 'PERFECT!! ' + contador +'/10',
            text: 'You are so smart',
            allowOutsideClick: false
        })

    } else if (contador > 5){
        Swal.fire({
            icon: 'success',
            title: 'GOOD JOB!! ' + contador +'/10',
            text: 'Keep improving',
            allowOutsideClick: false
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'FAIL!! ' + contador +'/10',
            text: 'Never give up',
            allowOutsideClick: false
        })
    }
    contador = 0;
}

 function checkValidate(v, n){
    var id = document.getElementById(`${n}`);
    if (id.value === v){
        contador++;
        id.style.background = " #00ff00";
        id.style.color = 'white';
    } else {
        id.style.background = "red";
        id.style.color = 'white';
    }
 }
//this code shows the answer of negative questions
function showAnswerNegative(){
    var clase = document.getElementsByClassName('sentences');
    for (var i = 0; i < 10; i++){
       
         switch(i){
            case 0:
                showValue(clase[i], 3);
            break;
            case 1:
                showValue(clase[i], 2);
            break;
            case 2:
                showValue(clase[i], 2);
            break;
            case 3:
                showValue(clase[i], 2);
            break;
            case 4:
                showValue(clase[i], 3);
            break;
            case 5:
                showValue(clase[i], 3);
            break;
            case 6:
                showValue(clase[i], 1);
            break;
            case 7:
                showValue(clase[i], 3);
            break;
            case 8:
                showValue(clase[i], 2);
            break;
            case 9:
                showValue(clase[i], 3);
            break;
            default:
                Swal.fire({
                    text:'that option does not exist'
                })
            break;

        }
    }
    Swal.fire({
        icon: 'question',
        text: 'If you do not remember all, you must review the theory'
    })
}

function showValue(clase, valor){
    
    clase.style.display ='inline';
    if (valor === 1){
        clase.innerHTML = "am not";
    } else if (valor === 2){
        clase.innerHTML = "isn't";
    } else{
        clase.innerHTML = "aren't";
    }
    clase.style.fontWeight = 'bold';
    clase.style.color = 'blue';
}
//these code check answer on question exercises
function checkQuestion(){
    for(var i = 0; i < 10; i++){
        var n = 'iq' + i.toString();
        switch(i){
            case 0: 
                checkValidate('3', n);
            break;
            case 1: 
                checkValidate('2', n);
            break;
            case 2: 
                checkValidate('3', n);
            break;
            case 3: 
                checkValidate('2', n);
            break;
            case 4: 
                checkValidate('2', n);
            break;
            case 5: 
                checkValidate('3', n);
            break;
            case 6: 
                checkValidate('3', n);
            break;
            case 7: 
                checkValidate('2', n);
            break;
            case 8: 
                checkValidate('3', n);
            break;
            case 9: 
                checkValidate('2', n);
            break;
            default:
                Swal.fire({
                    text:'that option does not exist'
                })
            break;         
                
        }

    }
    if(contador === 10){
        Swal.fire({
            icon: 'success',
            title: 'PERFECT!! ' + contador +'/10',
            text: 'You are so smart',
            allowOutsideClick: false
        })

    } else if (contador > 5){
        Swal.fire({
            icon: 'success',
            title: 'GOOD JOB!! ' + contador +'/10',
            text: 'Keep improving',
            allowOutsideClick: false
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'FAIL!! ' + contador +'/10',
            text: 'Never give up',
            allowOutsideClick: false
        })
    }
    contador = 0;

}

//these code show answer of questions exercises
function showAnswerQuestion(){
    var clase = document.getElementsByClassName('qSentences');
    for (var i = 0; i < 10; i++){
        
         switch(i){
            case 0:
                showValueQuestion(clase[i], 3);
            break;
            case 1:
                showValueQuestion(clase[i], 2);
            break;
            case 2:
                showValueQuestion(clase[i], 3);
            break;
            case 3:
                showValueQuestion(clase[i], 2);
            break;
            case 4:
                showValueQuestion(clase[i], 2);
            break;
            case 5:
                showValueQuestion(clase[i], 3);
            break;
            case 6:
                showValueQuestion(clase[i], 3);
            break;
            case 7:
                showValueQuestion(clase[i], 2);
            break;
            case 8:
                showValueQuestion(clase[i], 3);
            break;
            case 9:
                showValueQuestion(clase[i], 2);
            break;
            default:
                Swal.fire({
                    text:'that option does not exist'
                })
            break;

        }
    }
    Swal.fire({
        icon: 'question',
        text: 'If you do not remember all, you must review the theory'
    })

}

function showValueQuestion(clase, valor){
    clase.style.display = 'inline';
    if(valor === 2){
        clase.innerHTML = "Is";
    } else if (valor === 3){
        clase.innerHTML = "Are"
    }
    clase.style.fontWeight = 'bold';
    clase.style.color = 'blue';

}

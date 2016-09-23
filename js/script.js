'use strict';

$(function(){
$(document).ready(function () {	
	var html = $('#parsed-resig').html();
    var mainObj = [    
        {
        headerTest: 'Проверь свои знания JavaScript'
        },               
        {
        	question: 'JavaScript это',
        	blockAnswer: ['Объектно-ориентированный скриптовый язык программирования',
        	              'Скриптовой язык программирования',
        	              'Прототипно-ориентированный скриптовый язык программирования',
        	              'Все выше перечисленое верно'],
        	rightAnswer: 2
        },
        { 
            question: 'Где в документе может располагаться тэг script по стандарту HTML?',
            blockAnswer: ['В HEAD или в BODY',
                          'До HTML',
                          'Только в BODY',
                          'Только в HEAD'],
            rightAnswer: 0            
        },
        { 
            question: 'Какой из этих тагов соответствуют стандарту HTML?',
            blockAnswer: ['&lt;"script language="javascript" type="text/javascript"&gt;',
                          '&lt;script&gt;',
                          '&lt;script language="javascript"&gt;',
                          '&lt;script type="text/javascript"&gt;'],
            rightAnswer: 3             
        },
        {
            button: '<div class="calculate">Проверить результат</div>'
        }
    ];      
    
    localStorage.setItem('mainObj', JSON.stringify(mainObj));    
    mainObj = localStorage.getItem('mainObj');
    mainObj = JSON.parse(mainObj);       
    
    var $body = $('body');
    var content = tmpl(html, {
        data: mainObj}
        );
    
    $body.append(content);   

    function checkInputs(){ 
    var inputs = document.querySelectorAll('.' + myString[i]);    
        for (var j = 0; j < inputs.length; j++) {
        inputs[j].onchange = function() {
            for (var k = 0; k < inputs.length; k++) {
                inputs[k].checked = false;
                this.checked = true;
                }
            }
        }            
    };   
     
    var myString = ['cbGroup1', 'cbGroup2', 'cbGroup3'];
    for (var i = 0; i < myString.length; i++) {
        checkInputs();        
    };

    var score = 0;
    var $checkedAnswer;
    var $userAnswer = [];  
    var $button = $('.calculate'); 
    var allInputs = $('input');  
    $($button).one('click', function(){       
        $( ':checkbox:checked' ).each(function(){
            $checkedAnswer = (this.value);
            $userAnswer.push($checkedAnswer);
            $('input[type="checkbox"]').attr('disabled', "disabled");
        });
        countScore(); 
        showModal();     
    }); 

    function countScore(){     
    for (var i = 0; i < mainObj.length - 2; i++) {        
            if ($userAnswer[i] == mainObj[i + 1].rightAnswer) {
                score +=10;
            }
    };     
    return score;
    }; 

    function showModal(){
        var $body = $('body');
        var $modal = $('<div class="modal"><p class="modal-text">Вы набрали: ' + score + ' баллов</p></div>');
        var $closeButton = $('<div class="close-button">ЗАКРЫТЬ</div>')
        $body.append($modal);
        $modal.append($closeButton);

    $($closeButton).on('click', function() {        
        $modal.remove();     
    });
    };    
 });
});














 




 



	






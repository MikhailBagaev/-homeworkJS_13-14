'use strict';
$(function(){	
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
        	rightAnswer: 0
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
            button: '<button id="calculate">Проверить результат</button>'
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
    
    var takeInputs = function (){
        var inputs = document.querySelectorAll('.cbGroup1');
        for (var i = 0; i < inputs.length; i++) {            
        inputs[i].onchange = function() {
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].checked = false;
                this.checked = true;
                }
            }
        };    
    };
    takeInputs();  
});














 




 



	






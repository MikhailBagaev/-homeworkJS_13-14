'use strict';
$(function(){	
	
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
            blockAnswer: ['<script language="javascript" type="text/javascript"',
                          '<script>',
                          '<script language="javascript">',
                          '<script type="text/javascript">'],
            rightAnswer: 3             
        }    
    ];

    console.log(mainObj);
    
    localStorage.setItem('mainObj', JSON.stringify(mainObj));
    console.log('stringify - ', mainObj);
    var mainObj = localStorage.getItem('mainObj');
    console.log('stringify - ', mainObj);
    var mainObj = JSON.parse(mainObj);
    console.log(mainObj);
    
    var html = $('#parsed-resig').html();
    
    var $body = $('body');    

    var content = tmpl(html, {data: mainObj});
    $body.append(content);
    
    

 
});










 




 



	






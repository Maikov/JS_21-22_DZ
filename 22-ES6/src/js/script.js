'use strict';
$(function() {

	let test1 = {
		answer1:'Устройство накопления информации', 
		answer2:'Диск для метания', 
		answer3:'Кнопкой ВКЛ/ВЫКЛ'
	};

//TO LOCAL STORAGE
	localStorage.setItem('ques', JSON.stringify(test1));

//FROM LOCAL STORAGE
	let objects1 = localStorage.getItem('ques');
	let {answer1, answer2, answer3} = JSON.parse(objects1);

//INSERT
	for (let i = 1; i<2; i++) {
		$('#insert1').append(`<h3>Что такое жесткий диск?</h3>
			<label><input type="checkbox" id="right1">${answer1}</label>
			<label><input type="checkbox" id="right2">${answer2}</label>
			<label><input type="checkbox" id="right3">${answer3}</label>`);
	}

	let test2 = {
		answer4:'Выкинуть в окно', 
		answer5:'С помощью меню "ПУСК"', 
		answer6:'Диск из жести'
	};

//TO LOCAL STORAGE
	localStorage.setItem('ques1', JSON.stringify(test2));

//FROM LOCAL STORAGE
	let objects2 = localStorage.getItem('ques1');
	let {answer4, answer5, answer6} = JSON.parse(objects2);

//INSERT
	for (let i = 1; i<2; i++) {
		$('#insert2').append(`<h3>Как выключить компьютер?</h3>
			<label><input type="checkbox" id="right1">${answer4}</label>
			<label><input type="checkbox" id="right2">${answer5}</label>
			<label><input type="checkbox" id="right3">${answer6}</label>`);
	}

	let test3 = {
		answer7:'Животное', 
		answer8:'Приложение', 
		answer9:'Устройство ввода информации'
	};

//TO LOCAL STORAGE
	localStorage.setItem('ques2', JSON.stringify(test3));

//FROM LOCAL STORAGE
	let objects3 = localStorage.getItem('ques2');
	let {answer7, answer8, answer9} = JSON.parse(objects3);

//INSERT
	for (let i = 1; i<2; i++) {
		$('#insert3').append(`<h3>Что такое "Мышка"?</h3>
			<label><input type="checkbox" id="right1">${answer7}</label>
			<label><input type="checkbox" id="right2">${answer8}</label>
			<label><input type="checkbox" id="right3">${answer9}</label>`);
	}
	
//RIGHT ANSWERS 
	let rightAnswer = ['right1', 'right2', 'right3'];

//TO LOCAL STORAGE
	localStorage.setItem('answ', JSON.stringify(rightAnswer));

//FROM LOCAL STORAGE
	rightAnswer = JSON.parse(localStorage.getItem('answ'));

// BUTTON ON CLICK
	$('#button').on('click', function(){
		let checked = [];
		$("input:checkbox:checked").each(function(){checked.push($(this).attr('id'));}); 

		if(checked.length < 3) { 
			Window('Выберите ответ!');
	        return false;
	    }

	    var count = 0;
	    for ( var i = 0; i < checked.length; i++ ) {
	    	if ( checked[i] == rightAnswer[i] ) {
	    		count += 1 ;
	    	} else {
	    		Window('Вы не прошли тест!');
	    		break;
	    	}
	    }
	    if ( count == 3 ) {
	    	Window('Вы успешно прошли тест!');
	    }  
		$("input:checkbox:checked").attr('checked', false);
	});

});



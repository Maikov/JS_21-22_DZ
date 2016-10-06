'use strict';

$(function () {

	var test1 = {
		answer1: 'Устройство накопления информации',
		answer2: 'Диск для метания',
		answer3: 'Кнопкой ВКЛ/ВЫКЛ'
	};

	//TO LOCAL STORAGE
	localStorage.setItem('ques', JSON.stringify(test1));

	//FROM LOCAL STORAGE
	var objects1 = localStorage.getItem('ques');

	var _JSON$parse = JSON.parse(objects1);

	var answer1 = _JSON$parse.answer1;
	var answer2 = _JSON$parse.answer2;
	var answer3 = _JSON$parse.answer3;

	//INSERT

	for (var i = 1; i < 2; i++) {
		$('#insert1').append('<h3>\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0436\u0435\u0441\u0442\u043A\u0438\u0439 \u0434\u0438\u0441\u043A?</h3>\n\t\t\t<label><input type="checkbox" id="right1">' + answer1 + '</label>\n\t\t\t<label><input type="checkbox" id="right2">' + answer2 + '</label>\n\t\t\t<label><input type="checkbox" id="right3">' + answer3 + '</label>');
	}

	var test2 = {
		answer4: 'Выкинуть в окно',
		answer5: 'С помощью меню "ПУСК"',
		answer6: 'Диск из жести'
	};

	//TO LOCAL STORAGE
	localStorage.setItem('ques1', JSON.stringify(test2));

	//FROM LOCAL STORAGE
	var objects2 = localStorage.getItem('ques1');

	var _JSON$parse2 = JSON.parse(objects2);

	var answer4 = _JSON$parse2.answer4;
	var answer5 = _JSON$parse2.answer5;
	var answer6 = _JSON$parse2.answer6;

	//INSERT

	for (var _i = 1; _i < 2; _i++) {
		$('#insert2').append('<h3>\u041A\u0430\u043A \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440?</h3>\n\t\t\t<label><input type="checkbox" id="right1">' + answer4 + '</label>\n\t\t\t<label><input type="checkbox" id="right2">' + answer5 + '</label>\n\t\t\t<label><input type="checkbox" id="right3">' + answer6 + '</label>');
	}

	var test3 = {
		answer7: 'Животное',
		answer8: 'Приложение',
		answer9: 'Устройство ввода информации'
	};

	//TO LOCAL STORAGE
	localStorage.setItem('ques2', JSON.stringify(test3));

	//FROM LOCAL STORAGE
	var objects3 = localStorage.getItem('ques2');

	var _JSON$parse3 = JSON.parse(objects3);

	var answer7 = _JSON$parse3.answer7;
	var answer8 = _JSON$parse3.answer8;
	var answer9 = _JSON$parse3.answer9;

	//INSERT

	for (var _i2 = 1; _i2 < 2; _i2++) {
		$('#insert3').append('<h3>\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 "\u041C\u044B\u0448\u043A\u0430"?</h3>\n\t\t\t<label><input type="checkbox" id="right1">' + answer7 + '</label>\n\t\t\t<label><input type="checkbox" id="right2">' + answer8 + '</label>\n\t\t\t<label><input type="checkbox" id="right3">' + answer9 + '</label>');
	}

	//RIGHT ANSWERS 
	var rightAnswer = ['right1', 'right2', 'right3'];

	//TO LOCAL STORAGE
	localStorage.setItem('answ', JSON.stringify(rightAnswer));

	//FROM LOCAL STORAGE
	rightAnswer = JSON.parse(localStorage.getItem('answ'));

	// BUTTON ON CLICK
	$('#button').on('click', function () {
		var checked = [];
		$("input:checkbox:checked").each(function () {
			checked.push($(this).attr('id'));
		});

		if (checked.length < 3) {
			Window('Выберите ответ!');
			return false;
		}

		var count = 0;
		for (var i = 0; i < checked.length; i++) {
			if (checked[i] == rightAnswer[i]) {
				count += 1;
			} else {
				Window('Вы не прошли тест!');
				break;
			}
		}
		if (count == 3) {
			Window('Вы успешно прошли тест!');
		}
		$("input:checkbox:checked").attr('checked', false);
	});
});
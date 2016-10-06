var app = {

	myPower: function pow(x, n) {
  		var result = x;
		// var x = prompt("Введите число", '');
		// var n = prompt("Введите целую степень >1", '');
		
		if (n <= 1) {
  		alert('Степень  '+ n +' не поддерживается, введите целую степень, большую 1');
		} else if (n==0) {
  		return 1;
		}
  		for (var i = 1; i < n; i++) {
    	result *= x;
  		}
  		return result;
	}	
};

module.exports = app;

var CurResult = 0; //хранит текущий численный результат
var IsNewNumFlag = false; //определяю вводится новое число или нет
var OperPending = "";// хранит текущее нажатое значение

//функция обрабатывает кнопки с цифрами
function NumPress (Num) 
{ 
	if (CurResult != "Ошибка") {
		if (IsNewNumFlag)//если ввод нового числа, т.е. первой его цифры
		{
		Out.value = Num;
		IsNewNumFlag = false;
		}	
		else {//если не новое
			if (Out.value == "0")//если был сброс и стоит 0
//то заменяем его на новую цифру
				Out.value = Num;
			else
//иначе дописываем цифры
				Out.value += Num;
		}
	}
}
//функция обрабатывает кнопки с арифметическими операциями
function Operations (Op) {
	if (CurResult != "Ошибка") { 
		var out = Out.value;
		if (IsNewNumFlag && OperPending != "=")
		{
			Out.value = CurResult;
		}
		else
		{
			IsNewNumFlag = true;
			if ( '+' == OperPending )
				CurResult += parseFloat(out);
			else if ( '-' == OperPending )
				CurResult -= parseFloat(out);
			else if ( '/' == OperPending )
				CurResult /= parseFloat(out);
			else if ( '*' == OperPending )
				CurResult *= parseFloat(out);
			else
				CurResult = parseFloat(out);
				if (CurResult===Infinity) 
					CurResult = "Ошибка";
			Out.value = CurResult;
			OperPending = Op;
		}
	}
}
// Сброс всех параметров калькулятора
function Clear () 
{
		Currents = 0;
		OperPending = "";
		ClearEntry();
}
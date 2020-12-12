var hod = 0;
var check = 0;
var prohod;
var color;

function Game(Num) {
//ход пользователя 
if ((check == 0) && (document.getElementById('block'+Num).value != "X") && (document.getElementById('block'+Num).value != "O")) {
    document.getElementById('block'+Num).value =  "O"; 
    d = document.getElementById('block'+Num);
	if (d.style.color='black') {
        d.style.color='crimson';}
    document.getElementById('Hod').value =  "Дождитесь хода компьютера";
    prohod = 0;
    hod++;
    Check();
    if (check == 0) setTimeout(func,2000);
    }
}

//ход компьютера
 function func() {
    while (prohod != 1) {    var r = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    if ((check==0) && (document.getElementById('block'+r).value != "X") && (document.getElementById('block'+r).value != "O")) { 
    document.getElementById('block'+r).value =  "X";
    d = document.getElementById('block'+r);
	if (d.style.color='crimson') {
        d.style.color='black';}
    document.getElementById('Hod').value =  "Сделайте свой ход";
    prohod = 1;
    hod++;
    setTimeout(Check,1000);
    }
    }
}

function Check() {
//проигрыш
    if ((document.getElementById('block1').value =="X") && (document.getElementById('block5').value ==  "X") && (document.getElementById('block9').value ==  "X") && (check == 0))
     {alert("You lost"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};  
    if ((document.getElementById('block3').value =="X") && (document.getElementById('block5').value ==  "X") && (document.getElementById('block7').value ==  "X") && (check == 0))
     {alert("You lost"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block1').value =="X") && (document.getElementById('block4').value ==  "X") && (document.getElementById('block7').value ==  "X") && (check == 0))
     {alert("You lost"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block2').value =="X") && (document.getElementById('block5').value ==  "X") && (document.getElementById('block8').value ==  "X") && (check == 0))
     {alert("You lost"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block3').value =="X") && (document.getElementById('block6').value ==  "X") && (document.getElementById('block9').value ==  "X") && (check == 0))
     {alert("You lost"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block1').value =="X") && (document.getElementById('block2').value ==  "X") && (document.getElementById('block3').value ==  "X") && (check == 0))
     {alert("You lost"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block4').value =="X") && (document.getElementById('block5').value ==  "X") && (document.getElementById('block6').value ==  "X") && (check == 0))
     {alert("You lost"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block7').value =="X") && (document.getElementById('block8').value ==  "X") && (document.getElementById('block9').value ==  "X") && (check == 0))
     {alert("You lost"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
//победа
    if ((document.getElementById('block1').value =="O") && (document.getElementById('block5').value ==  "O") && (document.getElementById('block9').value ==  "O") && (check == 0))
     {alert("You win"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block3').value =="O") && (document.getElementById('block5').value ==  "O") && (document.getElementById('block7').value ==  "O") && (check == 0))
     {alert("You win"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block1').value =="O") && (document.getElementById('block4').value ==  "O") && (document.getElementById('block7').value ==  "O") && (check == 0))
     {alert("You win"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block2').value =="O") && (document.getElementById('block5').value ==  "O") && (document.getElementById('block8').value ==  "O") && (check == 0))
     {alert("You win"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block3').value =="O") && (document.getElementById('block6').value ==  "O") && (document.getElementById('block9').value ==  "O") && (check == 0))
     {alert("You win"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block1').value =="O") && (document.getElementById('block2').value ==  "O") && (document.getElementById('block3').value ==  "O") && (check == 0))
     {alert("You win"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block4').value =="O") && (document.getElementById('block5').value ==  "O") && (document.getElementById('block6').value ==  "O") && (check == 0))
     {alert("You win"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
    if ((document.getElementById('block7').value =="O") && (document.getElementById('block8').value ==  "O") && (document.getElementById('block9').value ==  "O") && (check == 0))
     {alert("You win"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};

    if ((hod>7) && (check == 0))
     {alert("Drawn game"); check = 1; document.getElementById('Hod').value =  "Игра окончена";};
}

function Clean() {
    for ( var i=1; i < 10; i++) {
        document.getElementById('block'+i).value = "";
    }
    check = 0;
    hod  = 0;
    document.getElementById('Hod').value =  "Ходите первым";
}
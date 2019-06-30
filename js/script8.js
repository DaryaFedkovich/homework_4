/*document.write('задание 8<br/>');
var arr=[];
while(true){
	var a = Number(prompt("введите число"));
	if(a === '' || a === 0){
		break;
	}
	arr.push(a);
}*/

document.write('задание 8<br/>');
var sum = 0,
	average = 0;
var arr = [];
for(i=1;;i++){
	var a = Number(prompt("введите число"));
	if(a === 0){
		break;
	}
	if(a === ''){
		alert("введено ни число");
	}
	sum = sum + a;
	average = sum / i;
	arr.push(a)
}
document.write("введены числа" +arr+"<br/>");
document.write("Сумма = " +sum+"<br/>");
document.write("Среднее арифметическое = " +average+"<br/>");
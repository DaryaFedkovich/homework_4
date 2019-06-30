document.write("задание 10<br/>");
var n = prompt("введите число");
document.write("вводится число " +n+"; ");
var sum = 0,
	count = 0,
	rez = 0;
for(i = 0; i < n.length; i++){
	
	sum = sum + parseInt(n[i]);
	count++; 
}
while(n){
	rez = rez*10;
	rez += n % 10;
	n = Math.floor(n / 10) ;
}

document.write("Количество цифр в числе = " +count+"; Сумма = " +sum+"; обратный порядок " +rez);

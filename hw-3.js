//1
let password = 'пароль';
let user_input = prompt('Введите пароль');
alert(password==user_input?'Пароль введен верно':'Пароль введен неверно');

//2
let c = 0;
console.log(c>0&&c<10?'Верно':'Неверно');
c = 10;
console.log(c>0&&c<10?'Верно':'Неверно');
c = -3;
console.log(c>0&&c<10?'Верно':'Неверно');
c = 2;
console.log(c>0&&c<10?'Верно':'Неверно');

//3
let d = 150;
let e = 40;
console.log(d>100 || e>100?'Верно':'Неверно');

//4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//5
let monthNumber = 12

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('зима');
        break;
    case 3:
    case 4: 
    case 5:
        console.log('весна');
        break;
    case 6: 
    case 7:
    case 8:
        console.log('лето');
        break;
    case 9:
    case 10: 
    case 11:
        console.log('осень');
        break;
   default:
        break;
}
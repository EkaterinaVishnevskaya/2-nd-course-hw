//1
function min(a, b) {
    return a > b ? b : a;
}

//2
function evenness(a) {
    return a % 2 == 0 ? 'Число четное' : 'Число нечетное';
}

//3
function printSqr(a) {
    console.log(a * a);
}

function sqr(a) {
    return a * a;
}

//4
function hello() {
    let age = prompt("Ваш возраст");
    switch (true) {
        case (age < 0):
            alert('Вы ввели неправильное значение');
            break;
        case (age <= 12):
            alert('Привет, друг!');
            break;
        case (age > 12):
            alert('Добро пожаловать!');
            break;
        default:
            break;
    }
}

//5
function multiply(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

//6
function cube() {
    let n = prompt('n');
    if (isNaN(Number(n))) {
        return 'Переданный параметр не является числом';
    } else {
        return `n в кубе равняется ${n * n * n}`;
    }
}

//7
function getArea() {
    return Math.PI * (this.radius ** 2);
 };
 
 function getPerimeter() {
    return Math.PI * this.radius * 2;
 };
 
 const circle1 = {
   radius: 5,
   getArea: getArea,
   getPerimeter: getPerimeter,
 }
 
 const circle2 = {
   radius: 10,
   getArea: getArea,
   getPerimeter: getPerimeter,
 }


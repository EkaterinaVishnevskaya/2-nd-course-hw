function guessNumber() {
    let x = Math.floor(Math.random() * 100) + 1
    let n = Number(prompt("Загадано число от 1 до 100. Попробуй угадать:)"));
    let f = true;

    while (f) {
        switch (true) {
            case isNaN(n):
                n = Number(prompt("Вы ввели не число"));
                break;
            case n > 100:
                n = Number(prompt("Mеньше. Ведь по условию число не больше 100"));
                break;
            case n < 1:
                n = Number(prompt("Больше. Ведь по условию число не меньше 1"));
                break;
            case n == x:
                if (confirm("Вы угадали! Ещё раз?")) {
                    guessNumber();
                }
                f = false;
                break;
            case n > x:
                n = Number(prompt("Mеньше"));
                break;
            case n < x:
                n = Number(prompt("Больше"));
                break;
        }
    }
}

function simpleMath() {
    const darr = ['+', '-', '*', '/'];
    let x = Math.floor(Math.random() * 31) - 15;
    let y = Math.floor(Math.random() * 15) + 1;
    let d = darr[Math.floor(Math.random() * 4)];
    if ((y == 0) && (d == '/')) {
        y++;
    }
    let ans = 0;
    switch (d) {
        case '+':
            ans = x + y;
            break;
        case '-':
            ans = x - y;
            break;
        case '*':
            ans = x * y;
            break;
        case '/':
            ans = x / y;
            break;
    }
    let n = Number(prompt(`Решите пример: ${x} ${d} ${y}`));
    if (Math.abs(n - ans) < 0.1) {
        alert("Правильно!");
    } else {
        alert(`Неравильно! Ответ - ${ans}`);
    }
}

function backward() {
    let s = prompt('Введите текст');
    alert(s.split('').reverse().join(''));
}

function quiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    if (confirm('Добро пожаловать на квиз. Начнём?')) {
        let ca = 0;
        quiz.forEach((q) => {
            let ans = Number(prompt(q.question + '\n' + q.options));
            if (ans == q.correctAnswer) {
                ca++;
            }
        })
        alert(`Вы дали ${ca} правильных ответов`);
    }
}

function rps() {
    const el = ["камень", "ножницы", "бумага", "камень", "ножницы"];
    let comp = Math.floor(Math.random() * 3)+1;
    let user = prompt("Камень, ножницы, бумага. 1, 2, 3...").toLowerCase();
    let s = `Ваш выбор: ${user}, выбор компьютера: ${el[comp]}\n`
    switch (true) {
        case user==el[comp]: 
            alert(s+'Это ничья!');
            break; 
        case user==el[comp+1]: 
            alert(s+'Вы проиграли!');
            break;
        case user==el[comp-1]: 
            alert(s+'Вы выиграли!');
            break;
        default:
            alert(`${user} не является корректным выбором`);
    }
}
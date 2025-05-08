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
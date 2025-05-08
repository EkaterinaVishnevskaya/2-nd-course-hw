//1
console.log('js'.toUpperCase());

//2
function start(a, s) {
    return a.filter(x => (x.toLowerCase().startsWith(s.toLowerCase())));
}

//3
let a = 32.58884;

console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));

//4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//5
function random10() {
    return Math.floor(Math.random() * 10) + 1;
}

//6
function randomX(x) {
    let a = [];
    for (let i = 0; i < Math.floor(x / 2); i++) {
        a.push(Math.floor(Math.random() * (x + 1)));
    }
    return a;
}

//7
function randomXY(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
}

//8
console.log(new Date());

//9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73)
console.log(currentDate);

//10
function segodnya(date) {
    const weekDayName = date.toLocaleString('ru-RU', { weekday: 'long' });
    const monthName = date.toLocaleString('ru-RU', { month: 'long' });
    const year = date.getFullYear();
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `Дата: ${day} ${monthName} ${year} — это ${weekDayName}.\nВремя: ${hour}:${minutes}:${seconds}`;
}
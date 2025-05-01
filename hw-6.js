//1
let a = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    if (a[i] == 10) {
        break;
    }
}

//2
for (let i = 0; i < a.length; i++) {
    if (a[i] == 4) {
        console.log(i);
        break;
    }
}

//3
let b = [1, 3, 5, 10, 20];
console.log(b.join(' '));

//4
let c = [];
for (let i = 0; i < 3; i++) {
    let d = [];
    for (let j = 0; j < 3; j++) {
        d.push(1);
    }
    c.push(d);
}

console.log(c)

//5
let e = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    e.push(2);
}

console.log(e);

//6
let f = [9, 8, 7, 'a', 6, 5];
f = f.sort();
f.pop();
console.log(f);

//7
let g = [9, 8, 7, 6, 5];
let n = prompt("Угадай число");
if (g.includes(n)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//8
let s = 'abcdef';
console.log(s.split('').reverse().join(''));

//9
let m = [[1, 2, 3], [4, 5, 6]];
let arr = m.reduce((total, curr) => {
    for (let i = 0; i < curr.length; i++) {
        total.push(curr[i]);
    }
    return total;
}, []);

console.log(arr);

//10
let p = [1, 3, 4, 3, 4, 5, 3, 5, 3, 4, 5, 3, 4, 2];
for (let i = 0; i < p.length - 1; i++) {
    console.log(p[i] + p[i + 1]);
}

//11
function sqrs(a) {
    return (a.map(x => x * x));
}

//12
function lengths(a) {
    return (a.map(s => s.length));
}

//13
function negatives(a) {
    return (a.filter(x => x < 0));
}

//14
let r = [];
for (let i = 0; i < 10; i++) {
  r.push(Math.floor(Math.random()*10)+1);
}
console.log(r);
let q = r.filter(x => x % 2 == 0);
console.log(q);

//15
let t = [];
for (let i = 0; i < 6; i++) {
  t.push(Math.floor(Math.random()*10)+1);
}
let u = t.reduce((total, curr) => total + curr/6, 0);
console.log(u);
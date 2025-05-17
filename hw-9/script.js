const button1 = document.querySelector('.hide');
button1.addEventListener('click', function () {
    const header1 = document.querySelector('.hiding_header');
    if (header1.style.display == 'none') {
        header1.style.display = 'block';
        button1.textContent = 'Скрыть';
    } else {
        header1.style.display = 'none'
        button1.textContent = 'Показать';
    }
});

const button2 = document.querySelector('.change-color');
button2.addEventListener('click', function () {
    const p = document.querySelector('.coloring-p');
    if (p.style.color == 'blue') {
        p.style.color = 'black';
    } else {
        p.style.color = 'blue'
    }
});

const button3 = document.querySelector('.change-header');
button3.addEventListener('click', function () {
    const h = document.querySelector('.changing-header');
    if (h.textContent == 'Привет, мир!') {
        h.textContent = 'Task 3';
    } else {
        h.textContent = 'Привет, мир!';
    }
});

const elements = document.querySelectorAll('.description');
elements.forEach(element => {
    element.textContent = 'Измененный текст';
});

const elements2 = document.querySelectorAll('p.description');
elements2.forEach(element => {
    element.textContent = 'Новый текст';
});

const button4 = document.querySelector('.add');
button4.addEventListener('click', function () {
    const newP = document.createElement('p');
    newP.textContent = 'Новый абзац';
    document.body.appendChild(newP);
});

const button5 = document.querySelector('.remove');
button5.addEventListener('click', function () {
    const elToRemove = document.querySelector('p.description');
    if (elToRemove) {
        elToRemove.remove();
    }
});
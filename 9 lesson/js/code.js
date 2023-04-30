// Завдання 1. Створіть 2 інпути та одну кнопку. Зробіть так, щоб інпути обмінювалися вмістом.
const inputOne = document.createElement('input');
const inputTwo = document.createElement('input');
inputOne.placeholder = 'Текст першого інпуту';
inputTwo.placeholder = 'Текст другого інпуту';
const btn = document.createElement('button');
btn.innerText = 'Змінити місцями';
btn.classList.add('buttonFirst');
const firstTask = document.querySelector('#firstTask');
firstTask.after(inputOne, inputTwo, btn);

btn.onclick = () => {
    const firstText = inputOne.value
    inputOne.value = inputTwo.value
    inputTwo.value = firstText 
}

// Завдання 2. Створіть 5 дів на сторінці потім використовуючи getElementsByTagName і forEath поміняйте дівам колір тіла.
const secondTask = document.querySelector('#secondTask');
window.onload = () => {
    const [...el] = document.getElementsByTagName('div');
    el.forEach((el) => {
        el.style.backround = 'rgb(100, 50, 10)'
    })
}

// Завдання 3. Cтворіть багаторядкове поле для введення тексту та кнопки.
// Після натискання кнопки користувачем програма повинна згенерувати тег div з текстом,
// який був у багаторядковому полі. Багаторядкове поле слід очистити після переміщення інформації
const textarea = document.createElement('textarea');
textarea.placeholder = 'Введіть текст';
thirdTask.after(textarea)
const btnThirdTask = document.createElement("button");
btnThirdTask.innerText = "Створити дів з введеним текстом";

textarea.after(btnThirdTask)

btnThirdTask.onclick = () => {
    const createDiv = document.createElement("div");
    createDiv.innerText = textarea.value;
    createDiv.id = "divTaskThree"
    createDiv.style.width = "100%"
    btnThirdTask.after(createDiv)
    textarea.value = null
}

// Завдання 4. Створіть картинку та кнопку з назвою "Змінити картинку". Зробіть так щоб при натиску
// кнопки картинка мінялась на другу, а при другому натиск на кнопку - на третю
const photo = ["https://itproger.com/img/courses/1476977240.jpg", 
                "https://itproger.com/img/courses/1476977488.jpg", 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"];
const img = document.createElement('img');
img.alt = 'img';
img.src = photo[0];
fourthTask.after(img);
const btnFourthTask = document.createElement('button');
btnFourthTask.innerText = 'Замінити картинку';
btnFourthTask.classList.add('firstImg');
img.after(btnFourthTask);

let counterImg = 0;
let click = document.querySelector('.firstImg').onclick = () => {
    img.src = photo[++counterImg];
    if (counterImg ===2) {
        counterImg = -1
    }
}

// Завдання 5. Створює на сторінці 10 параграфів і зробіть так, щоб при натисканні на параграф він
// зникав

function createP() {
    for (i = 0; i < 10; i++){
        const paragraph = document.createElement('p');
        paragraph.innerText = 'параграф:)';
        document.querySelector('.paragraphs').append(paragraph);
        paragraph.onclick = function (){
            paragraph.remove()
        } 
    }
}
createP();

// Завдання 6. Попрацювати з файлом 08. Зробити робочими всі кнопки.
let currentItem;

function selectFirstChild() {
    let chosenItem
    if (currentItem == undefined) {
        chosenItem = document.querySelector('ul').firstElementChild
        chosenItem.style.color = 'rgb(10, 22, 340)'
        return currentItem = chosenItem;
    }
    else {
        chosenItem = currentItem;
        chosenItem.style.color = 'rgb(230, 11, 49)';
        chosenItem = document.querySelector('ul').firstElementChild;
        chosenItem.style.color = 'rgb(10, 22, 340)'
        return currentItem = chosenItem;
    }
}

function selectLastChild() {
    let chosenItem = currentItem;
    if (currentItem == undefined) {
        chosenItem = document.querySelector('ul').lastElementChild;
        chosenItem.style.color = 'rgb(10, 22, 340)';
        return currentItem = chosenItem;
    }
    else {
        chosenItem = currentItem;
        chosenItem.style.color = 'rgb(230, 11, 49)';
        chosenItem = document.querySelector('ul').lastElementChild;
        chosenItem.style.color = 'rgb(10, 22, 340)';
        return currentItem = chosenItem;
    }
}

function selectNextNode() {
    let chosenItem;
    if (currentItem == document.querySelector('ul').lastElementChild){
        chosenItem = currentItem;
        chosenItem.style.color = 'rgb(230, 11, 49)';
        chosenItem = document.querySelector('ul').firstElementChild;
        chosenItem.style.color = 'rgb(10, 22, 340)';
        return currentItem = chosenItem;
    }
    else if (currentItem == undefined) {
        chosenItem = currentItem;
        chosenItem = document.querySelector('ul').firstElementChild;
        chosenItem.style.color = 'rgb(10, 22, 340)';
        return currentItem = chosenItem;
    }
    else {
        chosenItem = currentItem;
        chosenItem.style.color = 'rgb(230, 11, 49)';
        chosenItem = chosenItem.nextElementSibling;
        chosenItem.style.color = 'rgb(10, 22, 340)';
        return currentItem = chosenItem;
    }
}
    function selectPrevNode() {
        let chosenItem;
        if (currentItem == document.querySelector('ul').firstElementChild){
            chosenItem = currentItem;
            chosenItem.style.color = 'rgb(230, 11, 49)';
            chosenItem = document.querySelector('ul').lastElementChild;
            chosenItem.style.color = 'rgb(10, 22, 340)';
            return currentItem = chosenItem;
        }
        else if (currentItem == undefined) {
            chosenItem = currentItem;
            chosenItem = document.querySelector('ul').lasttElementChild;
            chosenItem.style.color = 'rgb(10, 22, 340)';
            return currentItem = chosenItem;
        }
        else {
            chosenItem = currentItem;
            chosenItem.style.color = 'rgb(230, 11, 49)';
            chosenItem = chosenItem.previousElementSibling;
            chosenItem.style.color = 'rgb(10, 22, 340)';
            return currentItem = chosenItem;
    }
}
let counterAfter = 5;
function createNewChild() {
    const list = document.getElementById('list');
    const newItem = document.createElement('li');
    newItem.textContent = `List Item ${++counterAfter}`;
    list.append(newItem);
}

let counterBefore = 1;
function createNewChildAtStart() {
    const list = document.getElementById('list');
    const newItem = document.createElement('li');
    newItem.textContent = `List Item ${--counterAfter}`;
    list.append(newItem);
}

function removeLastChild() {
    const removeItem  = document.querySelector('ul').lastElementChild;
    removeItem.remove();
}
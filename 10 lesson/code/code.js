// секундомір код
let countersec = 0, intervalHandlersec;
let countermin = 0, intervalHandlermin;
let counterh = 0, intervalHandlerh;

const sec = () => {
    countersec++;
    if (countersec === 60) {
        countersec = `00`
    }
    else if (countersec < 10 || countersec ===0) {
        countersec = `0${countersec}`
    }
    document.querySelector('.sec').textContent = countersec;
}

const min = () => {
    counter++;
    if (countermin === 60) {
        countermin = `00`
    }
    else if (countermin < 10 || countersec ===0) {
        countermin = `0${countermin}`
    }
    document.querySelector('.min').textContent = countermin;
}

const h = () => {
    if (counterh === 24) {
        counterh = `00`
    }
    else if (counterh < 10 || counterh === 0) {
        counterh = `0${counterh}`;
    }
    document.querySelector('.h').textContent = counterh;
}

function $(selector) {
    return document.querySelector(selector);
}

$(".start").onclick = () => {
    intervalHandlersec = setInterval(sec, 1000);
    intervalHandlermin = setInterval(min, 60000);
    intervalHandlerh = setInterval(h, 3600000);

    // $('#screen').classList.remove('.red');
    // $('#screen').classList.remove('.silver');
    $('#screen').classList.add('.green');
}

$('.stop').onclick = () => {
    clearInterval(intervalHandlersec);
    clearInterval(intervalHandlermin);
    clearInterval(intervalHandlerh);

    // $('#screen').classList.remove('.green');
    // $('#screen').classList.remove('.silver');
    $('#screen').classList.add('.red');
}

$('.reset').onclick = () => {
    clearInterval(intervalHandlersec);
    clearInterval(intervalHandlermin);
    clearInterval(intervalHandlerh);
    $('.sec').textContent = '00';
    $('.min').textContent = '00';
    $('.h').textContent = '00';
    countersec = 0;
    countermin = 0;
    counterh = 0;
    $('#screen').classList.remove('red');
    $('#screen').classList.remove('green');
    $('#screen').classList.add('silver');

}

// номер телефону

const pattern = /0\d\d-\d\d\d-\d\d-\d\d/;
const input_number = document.createElement("input");
input_number.id = "phone";
input_number.placeholder = "0ХХ-ХХХ-ХХ-ХХ";
input_number.type = "tel";
input_number.maxLength = 13;
phoneNumber.after(input_number);

const save_number = document.createElement("input");
save_number.id = "save-number";
save_number.value = "Зберегти";
save_number.type = "button";
input_number.after(save_number);

$("#save-number").onclick = () => {
    if (pattern.test($("#phone").value)) {
        $("#phone").classList.add("green");
        const change_location = () => {
            document.location = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg";
        }
        phoneNumber.setTimeout(change_location, 3000);
    }
    else {
        const show_error = document.createElement("div");
        show_error.innerText = "Номеру телефону не відповідає шаблону";
        show_error.classList.add("red");
        phoneNumber.after(show_error);
    }
}

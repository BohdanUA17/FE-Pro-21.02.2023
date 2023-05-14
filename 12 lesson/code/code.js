window.addEventListener('DOMContentLoaded', () => {
    
    const spanContainer = document.querySelector('.spanContainer');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.textContent = '❌';
    const errorSpan = document.createElement('span');
    errorSpan.classList = 'erorSpan';
    errorSpan.textContent = 'Please enter correct price';

    input = document.querySelector('.input');
    input.style.display = 'block';

    const displayNone =() => {
        span.remove();
        button.remove();
    }

    input.addEventListener('focus', () => {
        input.classList.add('green');
    })

    input.addEventListener('change', () => {
        input.classList.remove('green');

        if(input.value < 0){
            input.classList.add('red');
            input.after(errorSpan);
            displayNone();
        }
        else if(input.value !== ''){
            span.innerText = input.value;
            span.classList.add('colorGreen');
            spanContainer.append(span);
            spanContainer.append(button);

            if(input.classList.contains('red')){
                input.classList.remove('red');
                errorSpan.remove();
            }
        } 
        else if(input.value == '' &&  span.innerText !== ''){
            displayNone();
        }
        input.classList.remove('green');
    })
    input.addEventListener('blur', () => {
        input.classList.remove('green');
    });
    button.addEventListener('click', () =>{
        displayNone();
    })
})
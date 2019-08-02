function validate() {
    let inputs = document.querySelectorAll('.input');
    let submit = true;
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            submit = false;
            inputs[i].classList.add('invalid');
            inputs[i].placeholder = '';
            inputs[i].nextElementSibling.style.display = 'block';
            if (inputs[i].type === 'email') {
                inputs[i].placeholder = 'email@example/com';
            }
        }
    }

    return submit;
}
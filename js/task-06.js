document.getElementById('validation-input').addEventListener('blur', function () {
    let input = this;
    let enteredLength = input.value.length;
    let expectedLength = parseInt(input.getAttribute('data-length'));

    if (enteredLength === expectedLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
})
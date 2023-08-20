function emailGenerator(form) {
    let response;

    response = document.getElementById('response-container');
    response.innerHTML = form.elements['first'].value + "." +
    form.elements['last'].value + "@example.com";
    form.reset();
}
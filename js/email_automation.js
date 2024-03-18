document.addEventListener('DOMContentLoaded', function () {
    function handleCircleClick(event) {
        var serviceName = event.currentTarget.getAttribute('data-service');
        console.log('Service Name:', serviceName); 

        var subjectField = document.getElementById('form-subject');
        if (subjectField) {
            subjectField.value = serviceName;
            console.log('Subject field updated to:', subjectField.value); 
        } else {
            console.error('Subject field not found');
        }

        document.querySelector('.contact-form-section').scrollIntoView({ behavior: 'smooth' });
    }

    var circles = document.querySelectorAll('.floating-circle-1, .floating-circle-2, .floating-circle-3');
    circles.forEach(function (circle) {
        circle.addEventListener('click', handleCircleClick);
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('.contact-form');
    const formAction = form.getAttribute('action');
    const formMessage = document.getElementById('form-message');

    function displayMessage(msg, isError = false) {
        formMessage.textContent = msg;
        formMessage.style.display = 'block';
        formMessage.className = isError ? 'form-message error' : 'form-message';
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const submitButton = form.querySelector('.submit-btn');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        fetch(formAction, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    displayMessage('Message Sent!');
                    form.reset(); 
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            displayMessage('Errors in form', true);
                        } else {
                            displayMessage('An error occurred', true);
                        }
                    })
                }
            })
            .catch(error => {
                displayMessage('An error occurred', true);
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            });
    });
});
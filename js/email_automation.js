document.addEventListener('DOMContentLoaded', function () {
    function handleCircleClick(event) {
        var serviceName = event.currentTarget.getAttribute('data-service');
        console.log('Service Name:', serviceName); // Debugging line

        var subjectField = document.getElementById('form-subject');
        if (subjectField) {
            subjectField.value = serviceName;
            console.log('Subject field updated to:', subjectField.value); // Debugging line
        } else {
            console.error('Subject field not found'); // Debugging line
        }

        document.querySelector('.contact-form-section').scrollIntoView({ behavior: 'smooth' });
    }

    var circles = document.querySelectorAll('.floating-circle-1, .floating-circle-2, .floating-circle-3');
    circles.forEach(function (circle) {
        circle.addEventListener('click', handleCircleClick);
    });
});
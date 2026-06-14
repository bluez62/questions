const submitButton = document.getElementById("submit-button");
const afterSubmit = document.querySelectorAll('after-submit');

submitButton.addEventListener("click", function() {
    alert("Thank you for submitting your answers!");
    afterSubmit.forEach(element => {
        afterSubmit.style.visibility = 'hidden';
    });
});
const registerBtn = document.getElementById("registerBtn");
const birthInput = document.getElementById("birthInput");

registerBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let birthRegEx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    let birthRegExResult = birthRegEx.test(birthInput.value)

    if (birthRegExResult) {
        alert("Succesfully registered");
    } else {
        alert("Failed to register");
    }
})
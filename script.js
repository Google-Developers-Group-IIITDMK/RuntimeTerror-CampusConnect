document.addEventListener('DOMContentLoaded', () => {

    const allButtons = document.querySelectorAll('.button');

    allButtons.forEach(button => {
        button.addEventListener('click', () => {
            const btnText = button.innerText.toLowerCase().trim();

            if (btnText === "sign up") {
                window.location.href = "signup.html";
            } else if (btnText === "log in") {
                window.location.href = "login.html";
            }
        });
    });
});
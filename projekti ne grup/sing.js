
document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to the Sign in page!");

    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
    links.forEach(link => {
        link.addEventListener("mouseenter", () => link.style.color = "red");
        link.addEventListener("mouseleave", () => link.style.color = "");
    })
    const form = document.getElementById("signinForm");
    if (!form) {
        console.error("Form element with id 'signinForm' not found.");
        return;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById("firstname").value.trim();
        const lastName = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (!firstName || !lastName || !email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length > 12) {
            alert("Password must not exceed 12 characters.");
            return;
        }

        const oldMessage = document.querySelector(".success-message");
        if (oldMessage) oldMessage.remove();

        const successMessage = document.createElement("div");
        successMessage.textContent = "✅ Sign in form submitted successfully!";
        successMessage.classList.add("success-message");
        successMessage.style.color = "green";
        successMessage.style.marginTop = "10px";
        successMessage.style.fontWeight = "bold";

        form.appendChild(successMessage);

        form.reset();
    });
});
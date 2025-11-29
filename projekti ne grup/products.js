const search = document.getElementById("search");

search.addEventListener("keyup", () => {
    let value = search.value.toLowerCase();
    let cars = document.querySelectorAll(".card");

    cars.forEach(car => {
        let text = car.innerText.toLowerCase();
        car.style.display = text.includes(value) ? "block" : "none";
    });
});
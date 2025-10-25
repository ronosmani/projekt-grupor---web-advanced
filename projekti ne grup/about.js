const cars = [
  {
    name: "Mercedes-Benz C-Class",
    condition: "Excellent",
    description: "A sophisticated blend of luxury and performance. Recently serviced and in near-new condition. Ideal for business and comfort travel."
  },
  {
    name: "Audi A5",
    condition: "Good",
    description: "Sleek design with a powerful 2.0L turbo engine. Minor exterior scratches but mechanically perfect and ready for long drives."
  },
  {
    name: "BMW m3",
    condition: "Excellent",
    description: "Known for its dynamic handling and refined interior. Single owner, recently detailed, and perfectly maintained."
  },
  {
    name: "mcclaren720s",
    condition: "Superb",
    description: "A masterpiece of Italian engineering with a twin-turbo V8. Barely used, show-car condition, stunning in every detail."
  },
  {
    name: "Porsche 911",
    condition: "Excellent",
    description: "Low mileage sports car with timeless design. Excellent mechanical condition and pristine paintwork."
  },
  {
    name: "Porsche",
    condition: "Superb",
    description: "Exotic supercar with jaw-dropping design and roaring V10 engine. Kept in a private collection and rarely driven."
  },
  {
    name: "Passat",
    condition: "Fair",
    description: "Reliable daily driver with good mileage. Needs an oil change and minor interior cleaning, but runs smoothly."
  },
  {
    name: "Lamborghini",
    condition: "Excellent",
    description: "Iconic Japanese sports car. Custom exhaust and tuned engine give it breathtaking acceleration."
  },
  {
    name: "Opel",
    condition: "Good",
    description: "Nicknamed ‘Godzilla’ for its power. Some minor interior wear, but drives like a beast on the road."
  },
  {
    name: "Golf5",
    condition: "Excellent",
    description: "Fully electric luxury sedan with instant torque and autopilot. Battery in great health and software up to date."
  }
];

const carList = document.getElementById("car-list");
const filter = document.getElementById("conditionFilter");

function displayCars(list) {
  carList.innerHTML = "";
  list.forEach(car => {
    const carDiv = document.createElement("div");
    carDiv.classList.add("car");
    carDiv.innerHTML = `
      <h2>${car.name}</h2>
      <p class="condition ${car.condition.toLowerCase()}">Condition: ${car.condition}</p>
      <p class="description">${car.description}</p>
    `;
    carList.appendChild(carDiv);
  });
}

filter.addEventListener("change", () => {
  const value = filter.value;
  if (value === "all") {
    displayCars(cars);
  } else {
    const filtered = cars.filter(c => c.condition === value);
    displayCars(filtered);
  }
});

displayCars(cars);


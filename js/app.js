// Fields
const selectMark = document.querySelector("#mark");
const selectYear = document.querySelector("#year");
const selectMinPrice = document.querySelector("#price-min");
const selectMaxPrice = document.querySelector("#price-max");
const selectDoors = document.querySelector("#doors");
const selectColor = document.querySelector("#color");
const selectTransmission = document.querySelector("#transmission");

const containerResults = document.querySelector("#container-results");
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;
const dataSearch = {
	mark: "",
	year: "",
	minprice: "",
	maxprice: "",
	doors: "",
	color: "",
	transmission: "",
};

document.addEventListener("DOMContentLoaded", () => {
	selectYears();
	userSelection();
	showCars(cars);
});

// Print years in select
function selectYears() {
	for (let i = maxYear; i >= minYear; i--) {
		const option = document.createElement("option");
		option.setAttribute("value", i);
		option.textContent = i;
		selectYear.appendChild(option);
	}
}

// User selection
function userSelection() {
	selectMark.addEventListener("change", (e) => {
		dataSearch.mark = e.target.value;
		filterCar();
	});

	selectYear.addEventListener("change", (e) => {
		dataSearch.year = e.target.value;
		filterCar();
	});

	selectMinPrice.addEventListener("change", (e) => {
		dataSearch.minprice = e.target.value;
		filterCar();
	});

	selectMaxPrice.addEventListener("change", (e) => {
		dataSearch.maxprice = e.target.value;
		filterCar();
	});

	selectDoors.addEventListener("change", (e) => {
		dataSearch.doors = e.target.value;
		filterCar();
	});

	selectColor.addEventListener("change", (e) => {
		dataSearch.color = e.target.value;
		filterCar();
	});

	selectTransmission.addEventListener("change", (e) => {
		dataSearch.transmission = e.target.value;
		filterCar();
	});
}

// Show results cars on screen
function showCars(cars) {
	// Clean HTML
	cleanContainer();

	const titleNoResults = document.querySelector(".no-results-text");

	// Remove title "No results"
	if (cars.length > 0) {
		if (document.querySelectorAll(".no-results-text").length > 0) {
			titleNoResults.style.display = "none";
			containerResults.style.display = "block";
		}
	} else {
		titleNoResults.style.display = "block";
		containerResults.style.display = "none";
	}

	if (cars.length > 0) {
		// Add titles category
		const titles = document.createElement("article");
		titles.className = "section-results__article-title";
		titles.innerHTML = `
			<p>Mark</p>
			<p>Model</p>
			<p>Year</p>
			<p>Price</p>
			<p>Doors</p>
			<p>Color</p>
			<p>Transmission</p>
			`;
		containerResults.appendChild(titles);
	}

	cars.forEach((e) => {
		// Box car
		const containerResult = document.createElement("article");
		containerResult.className = "section-results__article";
		containerResult.innerHTML = `
			<p>${e.mark}</p>
			<p>${e.model}</p>
			<p>${e.year}</p>
			<p>${e.price}</p>
			<p>${e.doors} doors</p>
			<p>${e.color}</p>
			<p>${e.transmission}</p>
			`;
		containerResults.appendChild(containerResult);
	});
}

// Clean container
function cleanContainer() {
	containerResults.innerHTML = "";
}

// Filter results
function filterCar() {
	const result = cars
		.filter(filterMark)
		.filter(filterYear)
		.filter(filterMinPrice)
		.filter(filterMaxPrice)
		.filter(filterYear)
		.filter(filterDoors)
		.filter(filterTransmission)
		.filter(filterColor);

	showCars(result);
}

function filterMark(car) {
	if (dataSearch.mark) {
		return car.mark === dataSearch.mark;
	}
	return car;
}

function filterYear(car) {
	if (dataSearch.year) {
		return car.year == dataSearch.year;
	}
	return car;
}

function filterMinPrice(car) {
	if (dataSearch.minprice) {
		return car.price >= dataSearch.minprice;
	}
	return car;
}

function filterMaxPrice(car) {
	if (dataSearch.maxprice) {
		return car.price <= dataSearch.maxprice;
	}
	return car;
}

function filterDoors(car) {
	if (dataSearch.doors) {
		return car.doors == dataSearch.doors;
	}
	return car;
}

function filterTransmission(car) {
	if (dataSearch.transmission) {
		return car.transmission === dataSearch.transmission;
	}
	return car;
}

function filterColor(car) {
	if (dataSearch.color) {
		return car.color == dataSearch.color;
	}
	return car;
}

const convBttn = document.querySelector(".conv");
const resetBttn = document.querySelector(".reset");
const changeBttn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const input = document.querySelector("#converter");
const result = document.querySelector(".result");

// T(°F) = T(°C) × 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8

const changeFunction = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = "";
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
		result.textContent = "";
	}
};

const fahrToCelsius = () => {
	const fahrenheit = input.value * 1.8 + 32;
	result.textContent = `${input.value}°C equals ${fahrenheit.toFixed(1)}°F`;
	input.value = "";
};

const celToFahrenheit = () => {
	const celsius = (input.value - 32) / 1.8;
	result.textContent = `${input.value}°F equals ${celsius.toFixed(1)}°C`;
	input.value = "";
};

const conversion = () => {
	if (input.value !== "") {
		if (one.textContent === "°C") {
			fahrToCelsius();
		} else {
			celToFahrenheit();
		}
	} else {
		result.textContent = "Please input any value";
	}
};

const resetFunction = () => {
	input.value = "";
	result.textContent = "";
};

changeBttn.addEventListener("click", changeFunction);
convBttn.addEventListener("click", conversion);
resetBttn.addEventListener("click", resetFunction);

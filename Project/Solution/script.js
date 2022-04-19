const name = document.getElementById("name");
const years = document.getElementById("years");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const sport = document.getElementById("sport");

const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    let messages = []

    if (name.value === "" || name.value == null) {
        messages.push("Името е задължително!");
    }

    if (years.value < 3 && ((sport.value === "Плуване" || sport.value === "Конна езда"))) {
        messages.push("Прекалено малко дете!");
    } else if (years.value < 5 && ((sport.value === "Футбол" || sport.value === "Лека атлетика"))) {
        messages.push("Прекалено малко дете!");
    } else if (years.value < 7 && ((sport.value === "Волейбол" || sport.value === "Тенис"))) {
        messages.push("Прекалено малко дете!");
    }

    if (phone.value.length != 10) {
        messages.push("Телефонният номер трябва да е точно 10 цифри!");
    }

    if (!(sport.value === "Плуване" ||
            sport.value === "Конна езда" ||
            sport.value === "Волейбол" ||
            sport.value === "Футбол" ||
            sport.value === "Тенис" ||
            sport.value === "Лека ателтика")) {
        messages.push("Невалиден спорт!");
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }
});
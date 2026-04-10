const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {                                             //so o valor do input
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".value")
    const currencyValueToConverted = document.querySelector(".value-to-convert")

    const dolarToday = 5.15
    const euroToday = 5.96
    const libraToday = 6.74

    if (currencySelect.value == "dolar") { // se o valor selecionado for dolar, entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") { // se o valor selecionado for euro, entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") { // se o valor selecionado for euro, entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    // para formatar o valor do input para o formato de moeda brasileira
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector("#flag-name")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar"
        currencyImg.src = "./assets/DOLAR.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/EURO.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        currencyImg.src = "./assets/LIBRA.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
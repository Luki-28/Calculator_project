const result = document.querySelector(".result")
const buttons = document.querySelectorAll(".calculator button")

buttons.forEach(button => {
	button.addEventListener("click", () => {
		const buttonValue = button.textContent
		if (buttonValue === "=") {
			calculate()
		} else if (buttonValue === "C") {
			clearResult()
		} else if (buttonValue === "Del") {
			deleteLastCharacter()
		} else {
			appendToResult(buttonValue)
		}
	})
})

function appendToResult(value) {
	result.value += value
}

function clearResult() {
	result.value = ""
}

function deleteLastCharacter() {
	result.value = result.value.slice(0, -1)
}

function calculate() {
	try {
		const expression = result.value
		const resultValue = eval(expression)
		result.value = resultValue.toFixed(2)
	} catch (error) {
		result.value = "Error"
	}
}

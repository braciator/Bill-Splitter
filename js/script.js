const price = document.querySelector("#price")
const people = document.querySelector("#people")
const tip = document.querySelector("#tip")
const btn = document.querySelector(".count")
const error = document.querySelector(".error")
const reply = document.querySelector(".cost-info")
const cost = document.querySelector(".cost")

const emptyCheck = () => {
	if (price.value == "" || people.value == "" || tip.value == 0) {
		error.textContent = "Musisz uzupełnić wszytskie pola!"
		reply.style.display = "none"
	} else {
		error.textContent = ""

		countBill()
	}
}

const countBill = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)

	const sum = (newPrice + newPrice * newTip) / newPeople
	reply.style.display = "block"

	cost.textContent = sum.toFixed(2)
}

btn.addEventListener("click", emptyCheck)

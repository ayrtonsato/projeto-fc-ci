const sum = (a, b) => {
	// just to trigger a new event
	return a + b;
}

const minus = (a, b) => {
	return a - b;
}

const times = (a, b) => {
	return a * b;
}

const div = (a, b) => {
	return a / b;
}

const expo = (a, b) => {
	return a ** b;
}

module.exports = {
	sum,
	minus,
	times,
	div,
	expo,
}

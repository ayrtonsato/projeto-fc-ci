const math = require('./math')

describe('Math', () => {
	test('sum', () => {
		expect(math.sum(1, 1)).toBe(2)
	})

	test('minus', () => {
		expect(math.minus(1, 1)).toBe(0)
	})

	test('times', () => {
		expect(math.times(1, 1)).toBe(1)
	})

	test('div', () => {
		expect(math.div(2, 2)).toBe(1)
	})

	test('expo', () => {
		expect(math.expo(2, 2)).toBe(4)
	})
})

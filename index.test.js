const { test, expect } = require("@jest/globals");
const sut = require("./index"); // sut = System Under Test

test('sut correctly work', () => {
	for (const source of ['hello  world', 'hello   world', 'hello    world']) {
		const actual = sut(source);
		expect(actual).toBe("hello world");
	}
});

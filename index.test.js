const { test } = require("@jest/globals");
const sut = require("./index"); // sut = System Under Test

test('sut transforms "hello world" to "hello world"', () => {
	const actual = sut("hello world"); // 공백 1개
	expect(actual).toBe("hello world"); // 공백 1개여야 함
});


test('sut transforms "hello  world" to "hello world"', () => {
	const actual = sut("hello  world"); // 공백 2개 
	expect(actual).toBe("hello world"); // 공백 1개여야 함
});

test('sut transforms "hello   world" to "hello world"', () => {
	const actual = sut("hello   world"); // 공백 2개 
	expect(actual).toBe("hello world"); // 공백 1개여야 함
});

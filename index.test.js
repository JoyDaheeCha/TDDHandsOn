const { test, expect } = require("@jest/globals");
const sut = require("./index"); // sut = System Under Test

test.each`
  source             | expected
  ${"hello world"}   | ${"hello world"}
  ${"hello   world"} | ${"hello world"}
  ${"hello  world"}  | ${"hello world"}
`("sut transfrom $source to $expected", ({ source, expected }) => {
  const actual = sut(source);
  expect(actual).toBe(expected);
});

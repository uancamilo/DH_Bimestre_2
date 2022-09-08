const { generateText, validateInput, createElement } = require("../util");

describe("Conjunto Pruebas 2", () => {
	test("nuevoTest", () => {
		const parametrosIgual = generateText("Santiago", 18);
		expect(parametrosIgual).toMatch(`antiago (18 years old)`);
	});

	test("nuevoTest2", () => {
		const parametrosIgual = generateText("Santiago", 18);
		expect(parametrosIgual).not.toMatch(`Satiago (13 years old)`);
	});

	test("nuevoTest3", () => {
		const parametrosIgual = generateText("Santiago", 18);
		expect(parametrosIgual).toBe(`Santiago (18 years old)`);
	});
});

describe("Suit de Pruebas", () => {
	test("nuevoTest4", () => {
		const parametrosIgual = generateText("Santiago", 18);
		expect(parametrosIgual).toMatch(`antiago (18 years old)`);
	});

	test("nuevoTest5", () => {
		const parametrosIgual = generateText("Santiago", 18);
		expect(parametrosIgual).not.toMatch(`Satiago (13 years old)`);
	});

	test("nuevoTest6", () => {
		const parametrosIgual = generateText("Santiago", 18);
		expect(parametrosIgual).toBe(`Santiago (18 years old)`);
	});
});

test("nuevoTest7", () => {
	const parametrosIgual = validateInput(undefined, 1, 1);
	expect(parametrosIgual).toMatch(false);
});

test("nuevoTest8", () => {
	const parametrosIgual = createElement(`div`, "Texto", "div-contenedor");
	expect(parametrosIgual).toMatch("Texto");
});

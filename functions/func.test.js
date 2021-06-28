//isitraukti reikiama funkcija
const { expect } = require("@jest/globals");
const expectExport = require("expect");
const { add, divide, showValue, notMoreThan } = require("./func")

test('add function should add 5 and 10 to get 15', () => {
    // tikimes naudojant add funkcija  su argumentais 5 ir 10 gausim 15
    expect(add(5, 10)).toBe(15);
    expect(add(1, 5)).toBe(6);
})

test('20 divided by 10 should be 2', () => {
    expect(divide(20, 10)).toBe(2)
});

test('divide by 0 returns null', () => {
    expect(divide(20, 0)).toBe(null)
    expect(divide(20, 0)).toBeNull()
});

it('should be falsy', () => {
    expect(showValue(0)).toBeFalsy()
    expect(showValue("")).toBeFalsy()
    expect(showValue(undefined)).toBeFalsy()
    expect(showValue(null)).toBeFalsy()
    expect(showValue([])).not.toBeFalsy()
    expect(showValue({})).not.toBeFalsy()
});

it('should be no more than 400', () => {
    expect(notMoreThan(400)).toBe(true)
});

// string regex

it('team should not contain I', () => {
    expect('team').not.toMatch(/I/i)
    expect('+3706528974').toMatch(/\+370/)
});

// if (add(1, 6) !== 7) throw new Error('wrong')
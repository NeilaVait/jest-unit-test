const { expect } = require('@jest/globals');
const { copyArr, createUser, includesValue } = require('./reference')

it('should return new user Bob', () => {
    expect(createUser()).toEqual({ name: "Bob", email: 'bob@bot.com' })
});

it('should return copy of arr', () => {
    expect(copyArr([1, 2, 4])).toEqual([1, 2, 4])
})

it('should contain value', () => {
    expect(includesValue([1, 4, 8], 4)).toBeTruthy()
    expect([1, 4, 8]).toContain(4)

});
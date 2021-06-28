const { expect } = require('@jest/globals');
const {
  returnDrivers,
  allPeople,
  noSexNameSurname,
  nameSurnameArr,
  malesOnly,
  youngFemaleArr,
  marriedArr,
  lytisIrPajamos,
} = require('./tasks');

const people = allPeople();

test('should return object with drivers', () => {
  const testArr = [
    { hasCar: true, sex: 'male' },
    { hasCar: true, sex: 'male' },
    { hasCar: false, sex: 'male' },
    { hasCar: true, sex: 'female' },
    { hasCar: true, sex: 'female' },
    { hasCar: true, sex: 'female' },
  ];

  testArr.forEach((p) => {
    expect(Object.keys(p).includes('sex')).toBe(true);
    expect(Object.keys(p)).toContain('sex');
    expect(returnDrivers(testArr)).toEqual({ male: 2, female: 3 });
  });
});

test('should be length', () => {
  expect(people.length).toBeGreaterThan(0);
  // patikrinti kad visi age butu skaiciai
  people.forEach((p) => {
    expect(typeof p.age).toBe('number');
  });
});

it('should ', () => {
  expect(noSexNameSurname(people[0])).toEqual({
    id: 'it53',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
    devices: ['laptop', 'tablet', 'phone', 'drone'],
  });
});

it('should contain fullname', () => {
  nameSurnameArr.forEach((p) => {
    expect(p.fullname).toBeTruthy();
  });
});

it('should be male', () => {
  malesOnly.forEach((m) => {
    expect(m.sex).toBe('male');
  });
});

it('should be young females', () => {
  youngFemaleArr.forEach((f) => {
    expect(f.age).toBeLessThan(35);
    expect(f.sex).toBe('female');
  });
});

it('should be all married', () => {
  marriedArr.forEach((p) => {
    expect(p.married).toBe(true);
  });
});

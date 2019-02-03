const fizzBuzz = require('./fizzBuzz');

test('ใส่เลข 1 ออก 1', () => {
    expect(fizzBuzz(1)).toBe(1);
})

test('ใส่เลข 2 ออก 2', () => {
    expect(fizzBuzz(2)).toBe(2);
})

test('ใส่เลข 3 ออก Fizz', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test('ใส่เลข 4 ออก 4', () => {
    expect(fizzBuzz(4)).toBe(4);
})

test('ใส่เลข 5 ออก Buzz', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test('ใส่เลข 6 ออก Fizz', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
})

test('ใส่เลข 7 ออก 7', () => {
    expect(fizzBuzz(7)).toBe(7);
})

test('ใส่เลข 8 ออก 8', () => {
    expect(fizzBuzz(8)).toBe(8);
})

test('ใส่เลข 9 ออก Fizz', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
})

test('ใส่เลข 10 ออก Buzz', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
})

test('ใส่เลข 11 ออก 11', () => {
    expect(fizzBuzz(11)).toBe(11);
})

test('ใส่เลข 12 ออก Fizz', () => {
    expect(fizzBuzz(12)).toBe("Fizz");
})

test('ใส่เลข 13 ออก 13', () => {
    expect(fizzBuzz(13)).toBe(13);
})

test('ใส่เลข 14 ออก 14', () => {
    expect(fizzBuzz(14)).toBe(14);
})

test('ใส่เลข 15 ออก FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})

test('ใส่เลข 30 ออก FizzBuzz', () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
})
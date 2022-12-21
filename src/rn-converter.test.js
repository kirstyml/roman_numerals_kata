import { converter } from './rn-converter.js';

test('takes a one unit numeral and correctly converts', () => {
    expect(converter('I')).toBe(1);
    expect(converter('V')).toBe(5);
    expect(converter('X')).toBe(10);
    expect(converter('L')).toBe(50);
    expect(converter('C')).toBe(100);
    expect(converter('D')).toBe(500);
    expect(converter('M')).toBe(1000);
});

test('takes a two unit numeral and correctly converts', () => {
    expect(converter('II')).toBe(2);
    expect(converter('VI')).toBe(6);
    expect(converter('IV')).toBe(4);
    expect(converter('IX')).toBe(9);
    expect(converter('IL')).toBe(49);
});

test('takes a numeral over 2 in length and correctly converts', () => {
    expect(converter('III')).toBe(3);
    expect(converter('XCIX')).toBe(99);
});
import { converter } from './rn-converter.js';

test('takes I and converts to 1', () => {
    expect(converter('I')).toBe(1);
})
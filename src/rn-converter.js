export function converter(numeral) {
    // assume that numeral is a string and is a valid roman numeral
    const numeralDecimal = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    const chars = numeral.split("");

    return chars.reduce((acc, curr, i) => {
        if (numeralDecimal[curr] <= numeralDecimal[chars[i - 1]] || i === 0) {
            acc += numeralDecimal[curr];
        }
        else {
            acc = acc + numeralDecimal[curr] - (2 * numeralDecimal[chars[i - 1]]);
        }
        return acc;
    }, 0);
};

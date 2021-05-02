function combine(input1: number | string, input2: number | string) {
    // const result = input1 + input2;  // !!! doesn't like mixed addition
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combine(56, 20));
console.log(combine('Anna', 3));
console.log(combine(1, 'X'));

let a: 'value1' | 'value2';
a = 'value1';
a = 'value2';
a = 'something else';  // !!! invalid value for type 'value1' | 'value2'

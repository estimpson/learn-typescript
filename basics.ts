function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        console.log(`${phrase} ${n1 + n2}`);
    } else {
        return n1 + n2;
    }
}

let number1 = 5;        //type: number
const number2 = 2.8;    //type: 2.8
const printResult = true;
let resultPhrase = 'Result is: '    //type: string
// resultPhrase = 0;

add(number1, number2, printResult, resultPhrase);
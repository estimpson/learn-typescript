function printResult(num: number): void {

console.log('Result:' + num)
}

let doSomeWork: (a: number) => void;

doSomeWork = printResult;

doSomeWork(5);

function addAndHandle(val1: number, val2: number, cb: (num: number) => void) {
    const result = val1 + val2;
    cb(result);
}

addAndHandle(56, 23, (num) => {
    console.log(num);
})

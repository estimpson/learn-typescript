let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

//userName = userInput;     // !!! error because userInput is unknown
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

const result = generateError('An error occurred!', 500);
console.log(result);  // Never called because previous function call threw an exception
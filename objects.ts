/**
 * TypeScript hover person...
 * const person: {
 *  name: string;
 *  age: number;
 * }
 */
const person = {
  name: "Eric",
  age: 47,
};

console.log(person.nickname); // an error because person doesn't have a nickname property

/**
 * TypeScript hover test...
 * const test: object
 * TypeScript...const person:{ name: string; age: number; }    --- notice that TypeScript "suspects" that test is a "person"
 */
const test: object = {
  name: "Adam",
  age: 17,
};

console.log(test.name); // an error because object doesn't have a name property

/**
 * TypeScript hover alpha...
 * const alpha: {}
 */
const alpha: {} = {
  name: "Eve",
  age: 1,
};

console.log(alpha.age); // an error because {} doen't have an age property

/**
 * TypeScript hover beta...
 * const beta: {
 *  name: string,
 *  age: number,
 *  nickname: string
 * }
 * Property 'nickname' is missing in type '{ name: string; age: number; }' but required in type '{ name: string; age: number; nickname: string; }'
 */
const beta: {
    name: string,
    age: number,
    nickname: string
} = {
    name: 'Zeus',
    age: +Infinity,
    //nickname: 'The mighty',
}

console.log(beta.nickname);


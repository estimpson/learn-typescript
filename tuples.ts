const user = {
  name: 'Eric',
  age: 47,
  hobbies: ['Hockey', 'Cooking'],
  role: [2, 'author'], // this is a TypeScript 'union type' of either string or number --> role: (string | number)[]
};

user.role.push('admin');
user.role[1] = 10;

const appUser: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // this is a TypeScript 'tuple' type
} = {
  name: 'Eric',
  age: 47,
  hobbies: ['Hockey', 'Cooking'],
  role: [2, 'author'],
};

appUser.role[1] = 10;   // !!! type number is not assignable to type string
appUser.role[1] = '10'; // all good
appUser.role.push("Why not an error?") // this is a limitation of TypeScript
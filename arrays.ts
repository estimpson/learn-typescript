const user = {
    name: 'Eric',
    age: 47,
    hobbies: ['Hockey', 'Cooking']
}

let favoriteAcitivies: string[];
favoriteAcitivies = 'Hockey';           // not an array
favoriteAcitivies = ['Hockey', 1];      // 1 is not a string
favoriteAcitivies = ['Hockey', 'Cooking'];  // okay!

console.log(user.name);

for (const hobby of user.hobbies) {
    console.log(hobby.toUpperCase());
}
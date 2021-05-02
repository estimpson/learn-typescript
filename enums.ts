// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 1 };
const user = {
    name: 'Eric',
    age: 47,
    hobbies: ['Hockey', 'Cooking'],
    // role: ADMIN,
    role: Role.ADMIN
}

if (user.role === Role.ADMIN) {
    console.log(user.role);
}
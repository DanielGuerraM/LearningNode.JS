function isAdult(user) {
    return user.age >= 18;
}
var Daniel = {
    name: 'Daniel',
    age: 21
};
var isDanielAnAdult = isAdult(Daniel);

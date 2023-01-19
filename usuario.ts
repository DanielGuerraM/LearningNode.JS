type User = {
    name: string;
    age: number;
};

function isAdult(user: User): boolean {
    return user.age >= 18;
}

const Daniel: User = {
    name: 'Daniel',
    age: 21,
};

const isDanielAnAdult: boolean = isAdult(Daniel);



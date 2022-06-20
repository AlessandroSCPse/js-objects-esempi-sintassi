const name = 'Mario Verdi';
const age = 22;
const email = 'marioverdi@email.it';

const emailPropertyKey = 'userEmail';

const student = {
    name: name,
    age: age,
    [emailPropertyKey]: email
};

console.log(student);
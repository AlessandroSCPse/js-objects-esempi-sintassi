const palla = {
    color: 'rosso',
    weight: 200
};

// const pallaCopy = {
//     ...palla,
//     size: 20
// };

const pallaCopy = {...palla};
palla.size = 20;

console.log(palla);
console.log(pallaCopy);
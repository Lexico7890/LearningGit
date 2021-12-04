let person = {
    name: "oscar",
    age: 25,
    country: "Colombia"
};

let {name, age} = person

console.log(name,age);

const newPromice = () => {
    return new Promise((resolve, reject) => {

    })
}

newPromice()
    .then(response => console.log("it's true"))
    .catch(error => console.log(error))


//generators

function* functionGenrator(){
    if(true){
        yield 'hello';
    }
    if(true){
        yield 'world';
    }
}

const imprime = functionGenrator();
console.log(imprime.next().value)
console.log(imprime.next().value)
console.log(imprime.next().value)

const data = {
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data)
const values =  Object.values(data)
console.log(entries)
console.log(values)


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})/
const match = regexData.exec('2021-04-20T18:12:12');
const year = match[1]
const month = match[2]
const day = match[3]
const hour = match[4]
const minute = match[5]
const second = match[6]

console.log(year, month, day,hour, minute,second);

let array = [1,2,3,[1,2,[1,2,3,4]]]
let array2 = [1,2,3,4,5]

console.log(array.flat(3))
console.log(array2.flatMap(item => [item, item * 2]));

let hello = 'hola       '
console.log(hello)
console.log(hello.trimStart())

let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);


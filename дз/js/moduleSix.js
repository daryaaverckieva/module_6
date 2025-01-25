// задание 6.6.1 
let word = prompt('Введите слово'); 
let lowerWord = word.toLowerCase(); 

let reversedWordArray = []; 


for (let i = lowerWord.length - 1; i >= 0; i--) {
    reversedWordArray.push(lowerWord[i]); 
}


let reversedWord = reversedWordArray.join(''); 


if (lowerWord === reversedWord) {
    console.log(`Слово "${word}" является палиндромом.`); 
} else {
    console.log(`Слово "${word}" не является палиндромом.`); 
}

// задание 6.6.2 
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];

const newArr = [...new Set(arr)];

console.log(newArr);
 
// задание 6.6.3

const num = +prompt('Введите число');

if (typeof num === 'number') {
    const uniqueArr = [];
    for (let i = 0; i <= num; i += 1) {
        uniqueArr.push(i);
    };
    console.log(uniqueArr);
};

// задание 6.6.4 
const field = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
];

for (let i = 0; i < field.length; i += 1) {
    let row = '';
    for (let j = 0; j < field[i].length; j += 1) {
        row += field[i][j]; 
        if (j < field[i].length - 1) {
            row += ' ';
        }
    }
    console.log(row); 
};

// задание 6.6.5 
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (const key in obj) {
    const value = obj[key]; 

    if (Array.isArray(value)) {
        
        for (const item of value) {
            arrValues.push(item);
        }
    } else {
        arrValues.push(value);
    }
}
console.log(arrValues); 


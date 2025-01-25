// задание 6.6.1 
let word = prompt('Введите слово');
let lowerWord = word.toLowerCase(); 

let isPalindrome = true;

for (let i = 0; i < lowerWord.length / 2; i++) {
    
    if (lowerWord[i] !== lowerWord[lowerWord.length - 1 - i]) {
        isPalindrome = false; 
        break; 
    }
}

if (isPalindrome) {
    console.log(`Слово "${word}" является палиндромом.`);
} else {
    console.log(`Слово "${word}" не является палиндромом.`);
}
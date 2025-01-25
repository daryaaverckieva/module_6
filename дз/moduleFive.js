// Задание 5.10.1
 const number = prompt('Введите число');
alert(`Введенное число - ${+number}\nКвадрат числа - ${(+number) ** 2}\nКуб числа - ${(+number) ** 3}`);


// Задание 5.10.2
prompt('Введите промокод');
const  sale = 'скидка';
if (promo.toLowerCase('sale')){
  alert('Промокод применён')
}
alert('Промокод не применён')


// Задание 5.10.3
const name = prompt('Введите Ваше имя');
const yearOfBirth = prompt('Введите год рождения');
const currentYear = 2025;
const age = currentYear - yearOfBirth;
if (isNaN(yearOfBirth)) {
    alert('Год должен быть числом');
} else {
  alert(`${name}:${age}`);
}

// Задание 5.10.4
/* 
const name = prompt('Введите Ваше имя');
const yearOfBirth = prompt('Введите год рождения');
const currentYear = 2025;
const age = currentYear - yearOfBirth;
if (age % 10 === 1) {
  alert(`${name}:${age} год`);
} else if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) {
  alert(`${name}:${age} года`);
} else if (isNaN(yearOfBirth) || name === undefined) {
    alert('Год не число или пустое имя');
}
else  {
  alert(`${name}:${age} лет`);
};
*/


// Задание 5.10.5

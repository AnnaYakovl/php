let minUserValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxUserValue = parseInt(prompt('Максимальное знание числа для игры','100'));
const minDefaultValue = 0;
const maxDefaultValue = 100;
const maxLimitValue = 999;
const minLimitValue = -999;

minUserValue = (minUserValue < minLimitValue) ? minLimitValue : minUserValue;
maxUserValue = (maxUserValue > maxLimitValue) ? maxLimitValue : maxUserValue;

let minValue = minUserValue || minDefaultValue;
let maxValue = maxUserValue || maxDefaultValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

var arr = [
    [,"один", "два", "три", "четыре", "пять", "шесть","семь", "восемь", "девять", "десять"],
    ["одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать","шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"],
    [,,"двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят","семьдесят", "восемьдесят", "девяносто"],
    [,"сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот","семьсот", "восемьсот", "девятьсот"]
];

let answerNumber  = Math.floor((minValue + maxValue) / 2);

let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${getNumerInText(answerNumber)}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    prompt('Минимальное знание числа для игры','0');
    prompt('Максимальное знание числа для игры','100');
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            answerField.innerText = getAnAnswerOnFailed() ;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            //answerField.innerText = getAnAnswerOnSuccess() + answerNumber;
            answerField.innerText = getAnAnswerOnSuccess() + getNumerInText(answerNumber);
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        
        let phraseRandom;
        if (minValue === maxValue){
            answerField.innerText = getAnAnswerOnFailed();
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            //answerField.innerText = getAnAnswerOnSuccess() + answerNumber;
            answerField.innerText = getAnAnswerOnSuccess() + getNumerInText(answerNumber);
        }
    }
})

function getAnAnswerOnFailed() {

   let phraseRandom = Math.round(Math.random());
   let answerPhrase = (phraseRandom === 1) ?
       `Вы загадали неправильное число!\n\u{1F914}` :
       `Я сдаюсь..\n\u{1F92F}`;
    return answerPhrase;    
}

function getAnAnswerOnSuccess() {
    
    let phraseRandom = Math.round(Math.random()*2);
    let answerPhrase = "";
            
            switch(phraseRandom)
            {
                case 0:
                    answerPhrase = `Да это легко! Ты загадал\n`;
                    break;
                case 1:
                    answerPhrase = `Наверное, это число\n`;
                    break;
                case 2:
                    answerPhrase = `Я думаю, это число\n`;
                    break;
            }
    return answerPhrase;    
}

function getSuccessMessage() {
    let phraseRandom = Math.round(Math.random()*2);
    let answerPhrase = "";
            
            switch(phraseRandom)
            {
                case 0:
                    answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
                    break;
                case 1:
                    answerPhrase = `У тебя не было шансов\n\u{1F60F}`;
                    break;
                case 2:
                    answerPhrase = `У меня еще никто не выигрывал\n\u{1F61B}`;
                    break;
            }
    return answerPhrase;    
}

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = getSuccessMessage();
        gameRun = false;
    }
})

function getNumerInText(number) {
    
    let result = '';

    if (number == 0) {
        result = 0;
    }

    if (number < 0)
    {
        result = 'минус ';
        number = Math.abs(number);
    }

    if (countDigits(number) == 1) {
        result += arr[0][number]
    }
    else if (countDigits(number) == 2 && ((number - (number % 10))/10 > 1)) {
        if ((number % 10) == 0) {
            result += arr[2][number/10];
        } 
        else {
            result += arr[2][(number - (number % 10))/10];
            result += ' ' + arr[0][number % 10];
        }
    }
    else if (countDigits(number) == 2 && ((number - (number % 10))/10 == 1)) {
        result += arr[1][number % 10];
    }
    else if (countDigits(number) == 3) {
        if ((number % 100) == 0) {
            result += arr[3][number/100];
        }
        else {
            let x = number % 100;
            result += arr[3][(number - (number % 100))/100];
            if (x % 10 == 0) {
                result += ' ' + arr[2][x/10]
            }
            else if ((x - (x % 10))/10 == 1) {
                result += ' ' + arr[1][x];
            }
            else{
                result += ' ' + arr[2][(x - (x % 10))/10] + ' ' + arr[0][x%10]; 
            }
        }
    }
    return result;
}

function countDigits(n) {
    for(var i = 0; n >= 1; i++) {
       n /= 10;
    }
    return i;
 }
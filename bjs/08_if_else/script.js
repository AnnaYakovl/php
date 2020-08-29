let minValue = 0;
let maxValue = 100;
let minUserValue = 0;
let maxUserValue = 100;
const minDefaultValue = 0;
const maxDefaultValue = 100;
const maxLimitValue = 999;
const minLimitValue = -999;
let gameRun = false;
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

var arr = [
    [,"один", "два", "три", "четыре", "пять", "шесть","семь", "восемь", "девять", "десять"],
    ["одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать","шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"],
    [,,"двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят","семьдесят", "восемьдесят", "девяносто"],
    [,"сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот","семьсот", "восемьсот", "девятьсот"]
];

function prepareValue()
{
    orderNumber = 0;
    orderNumberField.innerText = orderNumber;
    maxUserValue  = parseInt(document.getElementById('maxValue').value);
    minUserValue  = parseInt(document.getElementById('minValue').value);
    minUserValue = (minUserValue < minLimitValue) ? minLimitValue : minUserValue;
    minUserValue = (minUserValue > maxLimitValue) ? minLimitValue : minUserValue;
    maxUserValue = (maxUserValue > maxLimitValue) ? maxLimitValue : maxUserValue;
    maxUserValue = (maxUserValue < minLimitValue) ? maxLimitValue : maxUserValue;

    minValue = minUserValue || minDefaultValue;
    maxValue = maxUserValue || maxDefaultValue;

    document.getElementById("min").innerHTML = minValue;
    document.getElementById("max").innerHTML = maxValue;

    answerNumber  = Math.floor((minValue + maxValue) / 2); 
    answerField.innerText = `Вы загадали число ${getNumerInText(answerNumber)}?`;
}

document.getElementById('btnRetry').addEventListener('click', function () {  
    document.getElementById('minValue').value = '';
    document.getElementById('maxValue').value = ''; 
    
    document.getElementById('collapseThree').setAttribute('class','collapse hide');
    document.getElementById('collapseOne').setAttribute('class','collapse show');   
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
            answerField.innerText = getAnAnswerOnSuccess() + getNumerInText(answerNumber);
        }
    }
})

document.getElementById('btnSend').addEventListener('click', function () {

    prepareValue();
    document.getElementById('collapseOne').setAttribute('class','collapse hide');
    document.getElementById('collapseTwo').setAttribute('class','collapse show');
    
})

document.getElementById('btnOk').addEventListener('click', function () {

    document.getElementById('collapseTwo').setAttribute('class','collapse hide');
    document.getElementById('collapseThree').setAttribute('class','collapse show');
    gameRun = true;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            answerField.innerText = getAnAnswerOnFailed() ;
            gameRun = false;
        } else {
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            maxValue = answerNumber;
            orderNumber++;
            orderNumberField.innerText = orderNumber;
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

function getNumerInText(num) {
    
    let result = '';
    let number = num;

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

            if (countDigits(x) == 1)
            {
                result += ' ' + arr[0][x];
            }
            else {
                if (x % 10 == 0) {
                    result += ' ' + arr[2][x/10]
                }
                else if ((x - (x % 10))/10 == 1) {
                    result += ' ' + arr[1][(x % 10)-1];
                }
                else{
                    result += ' ' + arr[2][(x - (x % 10))/10] + ' ' + arr[0][x%10]; 
                }
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
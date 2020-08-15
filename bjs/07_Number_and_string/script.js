let lastOperand = 0;
let operation = null;
let memory = '';
let isPoint = false;

const inputWindow = document.getElementById('inputWindow');
inputWindow.value = '0';

function clearInputWindow() {
    if (inputWindow.value === '0') {
        inputWindow.value = '';
    }
}

function reset() {
    inputWindow.value = '';
    isPoint = false;
}

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
    isPoint = false;
})

document.getElementById('btn_1').addEventListener('click', function () {
    clearInputWindow();
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    clearInputWindow();
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    clearInputWindow();
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    clearInputWindow();
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    clearInputWindow();
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    clearInputWindow();
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    clearInputWindow();
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    clearInputWindow();
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    clearInputWindow();
    inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
    clearInputWindow();
    inputWindow.value += '0';
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand =  parseFloat(inputWindow.value);
    operation = 'sum';
    reset();
})

document.getElementById('btn_point').addEventListener('click', function () {
    if (isPoint == false) {
        inputWindow.value += '.';
        isPoint = true;
    }
})

document.getElementById('btn_sub').addEventListener('click', function () {
    if (inputWindow.value != '0')
    {
        lastOperand =  parseFloat(inputWindow.value);
        operation = 'sub';
        inputWindow.value = '';
    }
    else {
        clearInputWindow();
        inputWindow.value += '-';
    }
    isPoint = false;        
})

document.getElementById('btn_multiplication').addEventListener('click', function () {
    lastOperand =  parseFloat(inputWindow.value);
    operation = 'multiplication';
    reset();
})

document.getElementById('btn_division').addEventListener('click', function () {
    lastOperand =  parseFloat(inputWindow.value);
    operation = 'division';
    reset();
})

document.getElementById('btn_memory').addEventListener('click', function () {

    if (this.getAttribute('aria-pressed') == 'true') {
        inputWindow.value = 0;
        this.setAttribute('aria-pressed',false);
    }
    else
    {
        inputWindow.value = memory;
        this.setAttribute('aria-pressed',true);
    }
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand =  parseFloat(inputWindow.value);
    let result = Math.sqrt(lastOperand);
    inputWindow.value = result;
    memory = '√' + lastOperand + '=' + result;
    lastOperand = 0;
    operation = '';
    isPoint = false;
})


document.getElementById('btn_calc').addEventListener('click', function () {

    let result = 0; 
    let operand = parseFloat(inputWindow.value);

    if (operation === 'sum') {
        result = lastOperand + operand;
        memory =  lastOperand + '+' + operand + '=' + result;
    }
    else if (operation === 'sub') {
        result = lastOperand - operand;
        memory = lastOperand + '-' + operand + '=' + result;
    }
    else if (operation === 'multiplication') {
        result = lastOperand * operand;
        memory = lastOperand + '*' + operand + '=' + result;
    }
    else if (operation === 'division') {
        result = lastOperand / operand;
        memory = lastOperand + '/' + operand + '=' + result;
    }

    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
})




let minValue = '';
let maxValue = '';
let answerNumber = '';
let orderNumber = '';
let gameRun = false;
let retryVar = '';
let okVar = '';
let failVar = '';

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

answerField.innerText = 'Место для ответа';
orderNumberField.innerText = orderNumber;

let stringVersion = '';
let outputValue = '';
let alertText = '';


function digitToString(digit) {
    let hund = '';
    let dec = '';
    let ones = '';

    let tmpVal = Math.abs(digit);
    let shortString = tmpVal.toString()

    

    switch (shortString[shortString.length - 1]) {
        case '1':
            ones = 'один';
            break;
        case '2':
            ones = 'два';
            break;
        case '3':
            ones = 'три';
            break;
        case '4':
            ones = 'четыре';
            break;
        case '5':
            ones = 'пять';
            break;
        case '6':
            ones = 'шесть';
            break;
        case '7':
            ones = 'семь';
            break;
        case '8':
            ones = 'восвемь';
            break;
        case '9':
            ones = 'девять';
            break;
    }

    if (tmpVal >= 10) {
        switch (shortString[shortString.length - 2]) {
            case '1':
                switch (shortString[shortString.length - 1]) {
                    case '0':
                        dec = 'десять';
                        break;
                    case '1':
                        dec = 'одиннадцать';
                        break;
                    case '2':
                        dec = 'двенадцать';
                        break;
                    case '3':
                        dec = 'тринадцать';
                        break;
                    case '4':
                        dec = 'четырнадцать';
                        break;
                    case '5':
                        dec = 'пятнадцать';
                        break;
                    case '6':
                        dec = 'шестнадцать';
                        break;
                    case '7':
                        dec = 'семнадцать';
                        break;
                    case '8':
                        dec = 'восемнадцать';
                        break;
                    case '9':
                        dec = 'девятнадцать';
                        break;
                }
                ones = '';

                break;
            case '2':
                dec = 'двадцать';
                break;
            case '3':
                dec = 'тридцать';
                break;
            case '4':
                dec = 'сорок';
                break;
            case '5':
                dec = 'пятьдесят';
                break;
            case '6':
                dec = 'шестьдесят';
                break;
            case '7':
                dec = 'семьдесят';
                break;
            case '8':
                dec = 'восемьдесят';
                break;
            case '9':
                dec = 'девяносто';
                break;
        }
    }

    if (tmpVal > 99) {
        switch (shortString[0]) {
            case '1':
                hund = 'сто';
                break;
            case '2':
                hund = 'двести';
                break;
            case '3':
                hund = 'триста';
                break;
            case '4':
                hund = 'четыреста';
                break;
            case '5':
                hund = 'пятьсот';
                break;
            case '6':
                hund = 'шестьсот';
                break;
            case '7':
                hund = 'семьсот';
                break;
            case '8':
                hund = 'восемьсот';
                break;
            case '9':
                hund = 'девятьсот';
                break;
        }
    }

    let result = hund + ' ' + dec + ' ' + ones
    if (digit < 0) {
        result = 'минус ' + result;
    }

    if (tmpVal === 0) {
        result = 'ноль';
    }
    
    return result
}

function runGame(event){

    // $(".collapse_show").hide();

    // console.log('start')
    minValue = parseInt(document.querySelector("#minVal").value);
    maxValue = parseInt(document.querySelector("#maxVal").value);


    if (isNaN(minValue) || minValue === null) {
        minValue = 0
    }
    minValue = (minValue < -999) ? -999 : minValue;
    
    // let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    if (isNaN(maxValue) || maxValue === null) {
        maxValue = 100
    }
    maxValue = (maxValue > 999) ? 999 : maxValue;

    alertText = 'Загадайте любое целое число от '+minValue.toString()+' до '+maxValue.toString()+', а я его угадаю!';

    $(".modal-body").html(alertText);
    
    // console.log(minValue);
    // console.log(maxValue);

    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    retryVar = Math.round(Math.random() * 2);
    okVar = Math.round(Math.random() * 2);
    failVar = Math.round(Math.random() * 2);

    stringVersion = digitToString(answerNumber);

    if (stringVersion.length<20){
        outputValue = stringVersion;
    }else{
        outputValue = answerNumber;
    }
    
    answerField.innerText = `Вы загадали число ${outputValue }?`;
}

document.querySelector('#startGame').addEventListener('click', runGame)



// let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
if (isNaN(minValue) || minValue === null) {
    minValue = 0
}
minValue = (minValue < -999) ? -999 : minValue;

// let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
if (isNaN(maxValue) || maxValue === null) {
    maxValue = 100
}
maxValue = (maxValue > 999) ? 999 : maxValue;

// alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
// let answerNumber = Math.floor((minValue + maxValue) / 2);
// let orderNumber = 1;
// let gameRun = true;
// let retryVar = Math.round(Math.random() * 2);
// let okVar = Math.round(Math.random() * 2);
// let failVar = Math.round(Math.random() * 2);





document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());

            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            stringVersion = digitToString(answerNumber)
            if (stringVersion.length<20){
                outputValue = stringVersion;
            }else{
                outputValue = answerNumber;
            }

            if (retryVar === 0) {
                answerField.innerText = `Вы загадали число ${outputValue }?`;
            } else if (retryVar === 1) {
                answerField.innerText = `Может быть, это число ${outputValue }?`;
            } else {
                answerField.innerText = `Вероятно, это число ${outputValue }?`;
            }
            retryVar = Math.round(Math.random() * 2);
            // console.log(okVar)
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            stringVersion = digitToString(answerNumber)
            if (stringVersion.length<20){
                outputValue = stringVersion;
            }else{
                outputValue = answerNumber;
            }

            if (retryVar === 0) {
                answerField.innerText = `Вы загадали число ${outputValue }?`;
            } else if (retryVar === 1) {
                answerField.innerText = `Может быть, это число ${outputValue }?`;
            } else {
                answerField.innerText = `Вероятно, это число ${outputValue }?`;
            }
            retryVar = Math.round(Math.random() * 2);
            // console.log(okVar)
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        if (okVar === 0) {
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        } else if (okVar === 1) {
            answerField.innerText = `Изи, мээн\n\u{1F60E}`;
        } else {
            answerField.innerText = `Deal with it\n\u{1F60E}`;
        }
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click', function () {

    // answerNumber = '';
    // orderNumber = ''
    // answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
    // minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    // maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    // alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    stringVersion = digitToString(answerNumber)
    if (stringVersion.length<20){
        outputValue = stringVersion;
    }else{
        outputValue = answerNumber;
    }
    answerField.innerText = `Вы загадали число ${outputValue }?`;

})
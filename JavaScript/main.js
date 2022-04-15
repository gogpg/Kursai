/*let x, y, z;
x = 1;
y = 2;
z = 3;

if (x + y > z) {

} else if (z - x == y) {

} else {
    console.log("nei viena salyga nera teisinga");
}
*/
/*console.log("hello world");
allert("hello world"); (apribotas naudojimas)*/


/*let a = 1; galima perrasyti
const b = 2; negalima perrasyti
a = 20;
b = 30;
console.log(a + b);*/

/*let a, b, c;
a = "Jonas";
b = 30;
c = false;
console.log(a, b, c);*/

/*let a = 2;
let b = 6;
let c = 6 / 2;

console.log(a + b + c);*/

/*let a = "only";
let b = 12;
let c = a + b;
let y = true;
let d = b + y;
console.log(a, b, c, y, d);*/

/*let a = 12;
    b = 1;
    c = [a, b]
    console.log(a + b + c)*/

/*let c = ["volvo", "bmw"]
console.log(c[0]);*/

/*let a, b, c, d, f;
     a = 1;
    b = "labas";
    c = 10;
    d = true;
    f = [a, b, c]
console.log(f[0], f[2]);*/

/*let a, b, c, d, e;
a = 10;
b = 6;
c = true;
d = 3;
e = a - d;


if (a == 6) {
    console.log("teisingai")
} else {
    console.log("klaida")
}

if (b == 6) {
    console.log("yes")
}
if (b == 2) {
    console.log("no")
}

if (c) console.log("yes") 
else console.log("no")

if (b + d > a){
    console.log("that is right")
} else if (b + d == a) {
    console.log("ppp")
} else {
    console.log("nei viena salyga nera teisinga")
}*/

/*-----------------------------------------------

/*const inputElement = document.getElementById("inputo-id"); /*inputo elementas*/
/*const a = 2;

function count() {
    const inputValue = inputElement.value; /*inputo reiksme*/
    /*const inputValueToNumber = Number(inputValue);/*inputo reiksmes vertimas i skaicius*/
   /*console.log(a + inputValueToNumber);
}*/


/*const inputas = document.getElementById("kaina");

const b = 2.35;
let c = 10;

function count() {
    const inputoreiksme = inputas.value;
    const inputoReiksmeSkaiciais = Number(inputoreiksme);
    
  console.log(b * inputoReiksmeSkaiciais);*/

    /*if (b + inputoReiksmeSkaiciais < 20) {
        console.log("mazesnis")
    } else if (b + inputoReiksmeSkaiciais == 20) {
        console.log("lygu")
    } else console.log(b * inputoReiksmeSkaiciais)
    
}*/


/*const numberZone = document.getElementById("numberZone");

function addNumber(number) {
    numberZone.textContent += number;
}*/

/*Lyginimas------------------------------------

const a = document.getElementById("pirmas")
/* (a, aa-sugalvotas kintamojo pavadinimas) */
/* const aa = document.getElementById("antras")

function ll() {
    b = Number(a.value);
    bb = Number(aa.value);

    if (b < bb) {
        console.log(b);
    } else if (b > bb) {
        console.log(bb);
    } else {
        console.log("Lygu")
    }
}

---------------------lyginimas end---------------
----------------------Skaiciuotuvas---------------*/

const numeriuVieta = document.getElementById("numeriuVieta");
const rezultatuVieta =document.getElementById("rezultatuVieta");

let firstNumber;
let symbol;
let prevNumber;
let isEqualClicked = false;

/*function one() {
    numeriuVieta.textContent += 1;
}
function two() {
    numeriuVieta.textContent += 2;
}
function three() {
    numeriuVieta.textContent += 3;
}*/

/*function addNumber(number) {
    numeriuVieta.textContent += number;
}*/

function addNumber(number) {
    if (Number(numeriuVieta.textContent) == 0) {
        numeriuVieta.textContent = number;
    } else {
        numeriuVieta.textContent += number;
    }
    
}


/*function addNumber(number) {
    if (Number(numeriuVieta.textContent) != 0) {
        numeriuVieta.textContent += number;
    }
    
}*/

function deleteNumber() {
    numeriuVieta.textContent = numeriuVieta.textContent.slice(0, -1)
}
 
function mathActions(symbolParam) {
    if (prevNumber && !isEqualClicked) {
        equals()
    }
    prevNumber = Number(numeriuVieta.textContent);
    /*console.log("suveike", numeriuVieta.textContent)*/
    numeriuVieta.textContent = 0;
    rezultatuVieta.textContent = prevNumber;
    symbol = symbolParam;
    
}

function equals(clicked) {
    /*numeriuVieta.textContent = firstNumber + Number(numeriuVieta.textContent);*/
    isEqualClicked = clicked;
    if (symbol == '+') {
        numeriuVieta.textContent = prevNumber + Number(numeriuVieta.textContent)
    } else if (symbol == '-') {
        numeriuVieta.textContent = prevNumber - Number(numeriuVieta.textContent)
    } else if (symbol == '*') {
        numeriuVieta.textContent = prevNumber * Number(numeriuVieta.textContent)
    } else if (symbol == '/') {
        numeriuVieta.textContent = prevNumber / Number(numeriuVieta.textContent)
    }
    rezultatuVieta.textContent = numeriuVieta.textContent;
}

function getSqrt() {
    if (numeriuVieta.textContent == 0) {
        rezultatuVieta.textContent = Math.sqrt(Number(rezultatuVieta.textContent));
     } else {
        numeriuVieta.textContent = Math.sqrt(Number(numeriuVieta.textContent));
    }
}

/*-----------------------end-skaiciuotuvas----------------------------------------

-----------------------zaidimas zirkles, akmuo, popierius--------------------------------------------*/
const atsakymuVieta = document.getElementById("atsakymuVieta");
let b;

function clickButton(a) {
    atsakymuVieta.textContent = "Jus paspaudete ";

    if (a == 'zirkles') {
        atsakymuVieta.textContent = atsakymuVieta.textContent + "ZIRKLES."
    } else if (a == 'akmuo') {
        atsakymuVieta.textContent = atsakymuVieta.textContent + "AKMUO."
    } else if (a == 'popierius') {
        atsakymuVieta.textContent = atsakymuVieta.textContent + "POPIERIUS."
    }

    b = Math.floor(Math.random() * 3) + 1;
    if (b == 1) {
        b = 'zirkles'
    } else if (b == 2) {
        b = 'akmuo'
    } else if (b == 3) {
        b = 'popierius.'
    }
    atsakymuVieta.textContent = atsakymuVieta.textContent + " Priesininkas pasirinko ";
    
    
    if (b == 'zirkles') {
        // ( += sutrumpinimas: atsakymuVieta.textContent = atsakymuVieta.textContent + 'zirkles')
        atsakymuVieta.textContent += "ZIRKLES."
    } else if (b == 'akmuo') {
        atsakymuVieta.textContent += "AKMUO."
    } else if (b == 'popierius') {
        atsakymuVieta.textContent += "POPIERIUS."
    }

    if (a == 'zirkles') {
        if (b == 'akmuo') {
            atsakymuVieta.textContent = atsakymuVieta.textContent + " Priesininkas laimejo!"
        } else if (b == 'popierius') {
            atsakymuVieta.textContent += " Tu laimejai!"
        } else atsakymuVieta.textContent +=" Lygiosios!"
    }

    if (a == 'akmuo') {
        if (b == 'popierius') {
            atsakymuVieta.textContent += " Priesininkas laimejo!" 
        } else if (b == 'zirkles') {
            atsakymuVieta.textContent += " Tu laimejai!"
        } else atsakymuVieta.textContent +=" Lygiosios!"
    }

    if (a == 'popierius') {
        if (b == 'zirkles') {
            atsakymuVieta.textContent += " Priesininkas laimejo!" 
        } else if (b == 'akmuo') {
            atsakymuVieta.textContent += " Tu laimejai!"
        } else atsakymuVieta.textContent +=" Lygiosios!"
    }



}





























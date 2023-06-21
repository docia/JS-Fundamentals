// 1
let a;
let b;
let c;
console.log(a < b < c);

// 2
let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = (y > x) + String(y);
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = y > x;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x ** Infinity;
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// 3
const isAdult = prompt("Have you reached 18y ?", "");

if (isAdult >= 18) alert("You are an adult.");
else alert("You are too young!");

// 4
let sideA;
let sideB;
let sideC;

function showPrompts() {
	sideA = +prompt("a =  cm", "");
	sideB = +prompt("b =  cm", "");
	sideC = +prompt("c =  cm", "");
}
showPrompts();

try {
	if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC))
		throw "not a number. Please re-enter the number.";
} catch (err) {
	alert(`Input is ${err}`);
	showPrompts();
}

const perimeter = (sideA + sideB + sideC) / 2;
const area = (
	(perimeter *
		(perimeter - sideA) *
		(perimeter - sideB) *
		(perimeter - sideC)) **
	(1 / 2)
).toFixed(3);
alert(`Area: ${area} cm^2`);

const isRightTriangle =
	sideA ** 2 + sideB ** 2 === sideC ** 2
		? "Right triangle"
		: "NOT Right triangle";
alert(isRightTriangle);

// 5
const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

if (hours >= 5 && hours <= 23) alert("Доброї ночі");
else if (hours >= 5 && hours <= 11) alert("Доброго ранку");
else if (hours >= 11 && hours <= 17) alert("Доброго дня");
else if (hours >= 17 && hours <= 23) alert("Доброго вечора");

// 6
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

// option 1
const obj = arr.reduce((acc, cur) => {
	if (cur in acc) acc[cur]++;
	else acc[cur] = 1;

	return acc;
}, {});

const maxValue = +Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
console.log(maxValue);
console.log(arr.filter((v) => v !== maxValue));

// option 2
// function filterArr(arr) {
//    return arr.reduce((acc, current, _, array) => {
//     const filteredAcc = arr.filter(v => v === acc);
//     const accLength = filteredAcc.length;

//     const filteredCurr = arr.filter(v => v === current);
//     const currLength = filteredCurr.length;

//     if (accLength >= currLength) return acc;

//     return current;
//    }, null)
// }
// console.log(filterArr(arr));




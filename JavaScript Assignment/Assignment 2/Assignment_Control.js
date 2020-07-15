/*---------------- To find the greatest number --------------------------*/
console.log("---------------- TO find the greatest number ------------------");
var arr = [70, 60, 80];
function greater(array) {
    if (array[0] > array[1] && array[0] > array[2]) {
        console.log(`${array[0]} is greater`);
    } else if (array[1] > array[0] && array[1] > array[2]) {
        console.log(`${array[1]} is greater`);
    } else {
        console.log(`${array[2]} is greater`);
    }
}
greater(arr);


/*--------------- To check the number is even or not ----------------*/
console.log("---------------- To check the number is even or not ------------------");

var evenOrNot = function (num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
evenOrNot(12);


/*-------------- To calculate (/,* ,+, -) ----------------------*/
console.log("---------------- To calculate /,* ,+, - ------------------");

(function (a, b, c) {
    switch (c) {
        case "*": console.log(`multiplication of ${a} and ${b} is`, a * b);
            break;
        case "/": console.log(`division of ${b} and ${a} is`, b / a);
            break;
        case "-": console.log(`substraction of ${b} and ${a} is`, b - a);
            break;
        case "+": console.log(`addition of ${a} and ${b} is`, a + b);
            break;
    }
})(10, 20, "/");


/*---------------- To find the area of a circle ----------------*/
console.log("-------------------- To find the area of a circle -----------------------");

var areaOfCircle = radius =>
    console.log('Area of a circle is ', radius * radius * 3.14);
areaOfCircle(10);


/*--------------- To relate two number ---------------*/
console.log("-------------------- To relate two number -----------------------");

var relate = (r1, r2) => {
    if (r1 > r2) {
        return `${r1} is greater then ${r2}`;
    } else if (r1 == r2) {
        return `${r1} equals to ${r2}`;
    } else {
        return `${r1} is less then ${r2}`;
    }
}
var relateResult = relate(30, 20);
console.log(relateResult);
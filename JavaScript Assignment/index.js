/*---------------- TO find the greates number --------------------------*/
console.log("---------------- TO find the greates number ------------------");
var arr = [80, 70, 60];
function greater(array) {
    var result = (array[0] > array[1] && array[0] > array[2]) ? array[0] : (array[1] > array[0] && array[1] > array[2]) ? array[1] : array[2];
    console.log(result);
}
greater(arr);


/*--------------- To check the number is even or not ----------------*/
console.log("---------------- To check the number is even or not ------------------");

var evenOrNot = function (num) {
    console.log((num % 2 == 0) ? true : false);
}
evenOrNot(3);


/*-------------- To calculate (/,* ,+, -) ----------------------*/
console.log("---------------- To calculate /,* ,+, - ------------------");

(function (a, b) {
    console.log(`addition of ${a} and ${b} is`, a + b);
    console.log(`substraction of ${b} and ${a} is`, b - a);
    console.log(`multiplication of ${a} and ${b} is`, a * b);
    console.log(`division of ${b} and ${a} is`, b / a);
})(10, 20);


/*---------------- To find the area of a circle ----------------*/
console.log("-------------------- To find the area of a circle -----------------------");

var areaOfCircle = radius =>
    console.log('Area of a circle is ', radius * radius * 3.14);
areaOfCircle(10);


/*--------------- To relate two number ---------------*/
console.log("-------------------- To relate two number -----------------------");

var relate = (r1, r2) => {
    return (r1 > r2) ? `${r1} is greater then ${r2}` : (r1 == r2) ? `${r1} equals to ${r2}` : `${r1} is less then ${r2}`;
}
var relateReslut = relate(30, 30);
console.log(relateReslut);
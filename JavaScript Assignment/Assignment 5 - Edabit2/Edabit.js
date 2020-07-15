/*-------- Easy ---------*/

//     1.      Largest Swap           //

function largestSwap(num) {
	return num / 10 > num % 10;
}



//     2.      Count Instances of a Character in a String           //

function charCount(myChar, str) {
	var c = 0;
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (myChar === ch) {
			c++;
		}
	}
	return c;
}



//     3.      Promises III: Native Promise, Introducing the Executor           //

let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("edabit")
	}, 1000)
})



//     4.      Filter out Strings from an Array           //

function filterArray(arr) {
	return arr.filter(value =>
		typeof value === 'number'
	)
}



//     5.      Recursion to Repeat a String n Number of Times           //

function repetition(txt, n) {
	if (n == 1) {
		return txt;
	}
	else {
		return txt + "" + repetition(txt, n - 1);
	}
}



//     6.      No Conditionals?           //

function flip(y) {
	return (y === 1) ? 0 : 1;
}



//     7.      Repeating Letters           //

function doubleChar(str) {
	var str1 = "";
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		str1 = str1 + ch + ch;
	}
	return str1;
}



//      8.     Factorial of a Positive Integer         //

function factorial(z) {
	if (z === 1 || z === 0) {
		return 1;
	}
	else {
		return z * factorial(z - 1);
	}
}



//     9.    Absolute Sum           //

function getAbsSum(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum = sum + Math.abs(arr[i]);
	}
	return sum;
}



//    10.     Sum of Cubes            //

function sumOfCubes(nums) {
	var sum = 0;
	for (var i = 0; i < nums.length; i++) {
		sum = sum + Math.pow(nums[i], 3);
	}
	return sum;
}







/*-------- Medium ---------*/

//     1.      Fix the Error: Flattening an Array           //

function flatten(arr) {
	return arr.flat();
}



//     2.      Algebra Sequence — Boxes           //

function boxSeq(step) {
	return step + (step % 2 * 2);
}



//     3.      Sastry Numbers           //

function isSastry(number) {
	var n = number + 1;
	var num = number + "" + n;
	return Number.isInteger(Math.sqrt(num, 2));
}



//     4.      Remove Trailing and Leading Zeros           //

function removeLeadingTrailing(n) {
	return Math.abs(n) + "";
}



//     5.      Promises I: What Is a Closure?           //

function greetingMaker(salutation) {
	return function closure(name) {
		return salutation + ", " + name
	}
}



//     6.      Volume of a Cone           //

function coneVolume(h, r) {
	if (r === 0 || h === 0) {
		return 0;
	} else {
		return parseFloat((Math.PI * Math.pow(r, 2) * (h / 3)).toFixed(2));
	}
}



//     7.      Multiplying Numbers in a String           //

function multiplyNums(nums) {
	var arr = nums.split(",");
	var pro = 1;
	for (var i = 0; i < arr.length; i++) {
		pro = pro * arr[i];
	}
	return pro;
}



//      8.     Count Ones in Binary Representation of Integer          //

function countOnes(i) {
	var arr = i.toString(2).split('');
	var count = 0;
	/*for(var j=0;j<arr.length;j++)
		{
			if(arr[j] === "1"){
				count++;
			}
		}*/
	arr.filter(function (value, index) {
		if (value === "1") {
			count++;
		}
	});
	return count;
}



//     9.    Index Multiplier            //

function indexMultiplier(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum = sum + i * arr[i];
	}
	return sum;
}



//    10.     Filter Repeating Character Strings            //

function identicalFilter(arr) {
	return arr.filter(val => {
		return new Set(val.split('')).size == 1
	})
}




/*-------- Hard ---------*/

//           Book Shelf           //

function Book(title, author) {

	this.title = title;
	this.author = author;
	this.getTitle = function () {
		return "Title: " + this.title;
	}
	this.getAuthor = function () {
		return "Author: " + this.author;
	}
}

var PP = new Book("Pride and Prejudice", "Jane Austen")
var H = new Book("Hamlet", "William Shakespeare")
var WP = new Book("War and Peace", "Leo Tolstoy")



//           Seven Boom!           //

function sevenBoom(arr) {
	var a = arr.join('').includes(7);
	return (a) ? "Boom!" : "there is no 7 in the array";
}



//           Tower of Hanoi           //

function towerHanoi(discs) {
	return Math.pow(2, discs) - 1;
}



//           Number of Boomerangs           //

function countBoomerangs(arr) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
			count++;
		}
	}
	return count;
}



//           Length of a Nested Array           //

function getLength(arr) {
	return arr.flat(Infinity).length;  //flat(Infinity)-setting depth value as infinity.
}

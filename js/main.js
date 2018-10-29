console.log("connected");

// create an array of 5 numbers each with 2 decimal places
var myArr = [4.15, 8.08, 2.11, 9.87, 3.33];
var roundedNum = [];

// loop through array, and 
for (i = 0; i < myArr.length; i++) {

// round all numbers to nearest whole integer
	roundedNum.push(Math.round(myArr[i]));
}

console.log(roundedNum);

// add each rounded number to a new array
function genNum(){
	var ranNum = []
	for(i = 0; i < 10; i++){
		ranNum.push(Math.round(Math.random() *100));
	}
	retun ranNum;
}

console.log(r)





// create a function that produces 10 random numbers between 1 and 100

Math.round(Math.random() * 100)


// Math.floor(Math.random() * (max - min + 1) + min); 
// Math.floor(Math.random() * (100) + 1);
// add each number to an array of numbers




// write out a function that creates a few variables which store teh following information:
// one which stores the whole date
var myDate = new Date();

// one for the current hour
// var hourNow = myDate.getHour();

// one for the current minute
// var minNow = myDate.getMinute();

// one for the current second
// var seconds = myDate.getSeconds();




// insdie the function, create a variable that will display the current time in hh:mm:ss format.
	// account for single digits

var hh = formatTime(myDate.getHours());
var mm = formatTime(myDate.getMinutes());
var ss = formatTime(myDate.getSeconds());

function formatTime(timeVar){
	if(timeVar < 10) {
		return timeVar = "0" + timeVar;
	}else{
		return timeVar;
	}
}


// inside the function, create a few more variables to store the current month, day, and year
var dd = formatTime(myDate.getDate());
var mo = formatTime(myDate.getMonth());
var yy = formatTime(myDate.getFullYear());


// inside the function, create a varaible that will display the current date in dd/mm/yy format
	// account for single digits
function formatDate(dateVar){
	if(dateVar < 10) {
		return dateVar = "0" + timeVar;
	}else{
		return dateVar;
	}
}

// by now, you should have a function which displays the date and time in the hh:mm:ss dd/mm/yy format
// change your function to print this time and date on your document

myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds()

// document.body.innerHTML += "<h1>" + myArray[Math.ceil(Math.random() * myArray.length - 1)] + "</h1>";

// now write some code that will run this time/date function every second.
// to do this, your function will need to use setTimeout to invoke this after a delay

// var a = function(){alert("hi Mom!")};
// var b = 3000;

// console.log(setTimeout(a, b));

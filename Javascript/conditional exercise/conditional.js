var age = Number(prompt("what's you age"));

if (age < 0){
	console.log("error");
}

if (age === 21) {
	console.log("happy 21");
} 

if (age % 2 === 0){
	console.log("you age is odd");
}

if (age % Math.sqrt(age) === 0){
	console.log('perfert squre');
}
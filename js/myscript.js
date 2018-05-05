var firstName = "John";
var lastName = "Loh";
var available = true;
var active = true;
var age = 43;
var ageString = "43";

if (age < 20) {
	console.log("John is very young");
} else if (age > 20 && age < 50) {
	console.log("John is middle age");
} else {
	console.log("John is enjoying the twilight of his life");
}

console.log(age == ageString);
console.log(age === ageString);

function sayHello(name) {
	return "Hello " + name;
}

console.log(sayHello(firstName));

var user = {
	firstName: "Eric",
	lastName: "Loh",
	active: true,
	age: 45,
	sayHello: function() {
		return "Hello " + this.firstName;
	}
};

console.log(user.sayHello());

var newUser = {
	firstName: "Jane",
	lastName: "Loh",
	active: true,
	age: 7,
	address: {
		line1: "Blk 230 #05-123",
		line2: "Bukit Batok Fun Road",
		city: "Singapore",
		postCode: "650230",
		country: "Singapore"
	},
	sayHello: function() {
		return "Hello, " + this.firstName + 
			" and my profession is " + this.profession;
	}
};

user.profession = "Developer";

console.log(newUser);
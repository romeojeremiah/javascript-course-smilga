// create two objects, person1 and person2

// setup name, age, status

const person1 = {
  name: "john",
  age: 24,
  status: "resident",
};

const person2 = {
  name: "holly",
  age: 14,
  status: "tourist",
};

// setup if else, condition where age must be bigger
// than 18 and status must be equal to resident

function tester(person) {
  if (person.age > 18 && person.status === "resident") {
    console.log("got it!");
  } else {
    console.log("nope");
  }
}

tester(person1);
tester(person2);

// test with both objects

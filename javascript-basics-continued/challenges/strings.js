// create function fullName

// accept two parameters "firstName", "lastName"

// add them together (concat) and return result in uppercase

// invoke fullName and pass some values

// log result

// change the order of arguments

// refactor to object paramter

const fullName = function fullName(firstName, lastName) {
  return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
};

console.log(fullName("Romeo", "Jeremiah"));

console.log(fullName("Peter", "Buffett"));

console.log(fullName("Jeremiah", "Romeo"));

const fullNameObject = function (nameObject) {
  return `${nameObject.firstName.toUpperCase()} ${nameObject.lastName.toUpperCase()}`;
};

const nameObject = {
  firstName: "Romeo",
  lastName: "Jeremiah",
};

console.log(fullNameObject(nameObject));

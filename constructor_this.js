// Person constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const brad = new Person("Brad", 30);
const john = new Person("John", 24);
console.log(brad);

//

function Person2(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const sara = new Person2("Sara", "9-10-1981");
console.log(sara.calculateAge());

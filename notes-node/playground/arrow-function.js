const square = x => x * x;

console.log(square(9));

var user = {
  name: 'Chao',
  sayHi () {
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();

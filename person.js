// console.log(__dirname, __filename);

class Bio {
  constructor(name, age, passion) {
    this.name = name;
    this.age = age;
    this.passion = passion;
  }

  hello() {
    console.log(
      `My name is ${this.name} and my age is ${this.age} and my passion is ${this.passion}`
    );
  }
}

module.exports = Bio;

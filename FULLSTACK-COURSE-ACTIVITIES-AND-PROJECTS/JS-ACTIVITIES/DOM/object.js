function Bellboy(name, age, yearsExp, languages){
  this.name = name;
  this.age = age;
  this.yearsExp = yearsExp;
  this.languages = languages;
}

function Housekeeper(name, age, yearsExp, languages){
  this.name = name;
  this.age = age;
  this.yearsExp = yearsExp;
  this.languages = languages;
}

let bellboy1 = new Bellboy("John", 25, 3, ["English", "Spanish"]);
let housekeeper1 = new Housekeeper("Mary", 30, 5, ["English", "French"]);
console.log(bellboy1.name);
console.log(housekeeper1);
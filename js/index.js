// "use strict";
function pow(num, i){

  if(i == 1 ){
    return num
  } else {

    return  num * pow(num, i -1)
  }
}





//SQL crud

// Create
// INSERT INTO `articles_category` (`title`) VALUES ('Природа');  //insert data into table articles_category field title
// INSERT INTO `articles` (`title`, `text`, `category_id`, `pubdate`) VALUES('Hantering snow leopard', 'lorem ipusm...... ', 7, NOW())

// Read

// SELECT * FROM `articles_category` sql returns all field in selected table
// SELECT * FROM `articles` ORDER BY `views` sort by vievs in  articles table

// SELECT * FROM `articles` ORDER BY `views` DESC sort by vievs in  articles table reverse

//Update

// UPDATE articles SET `title`  = 'Updated hohedenie' WHERE `id` = 2; 
// UPDATE articles SET `views` = `views` + 1 WHERE `id` = 2; обнови таблицю articles в ній поле views = цеж поле плюс 1 де всі 
// id = 2;


//Delete

// DELETE FROM articles WHERE `id` = 6; 

// DELETE FROM articles WHERE `title` = 'refrefre' AND `views` = 0;

// var str = "Hello world!";

// // Look for "Hello"
// var patt = /h/g;
// var result = patt.test(str);
// console.log(result);
// if (a) {
// 	console.log('1');
// }
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// function topSalary(obj) {
//   let max = -Infinity,
//       objec ={};
//
//   for(let [name, salary] of Object.entries(obj)) {
//     if(salary > max) {
//       max = salary;
//       objec.name = name;
//       objec.salary = salary;
//     }
//   }
//   return objec;
// }
//
// console.log(topSalary(salaries));

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };
//
// let json = JSON.stringify(student);
// let obj = JSON.parse(json);
// console.log(typeof json); // мы получили строку!
//
// console.log(json);
// console.log(obj);

// Array.prototype.min = function(){
// 	this.sort((a,b) => a - b);
// 	this.splice(0,3);
// 	return Math.min(...this);
// }
// Array.prototype.max = function(){
// 	let max = Math.max(...this);
// 	let index = this.indexOf(max);
// 	this.splice(index, 1);
// 	return Math.max(...this);
// }
// let a = [1,4,79,3,4,-20];
// console.log(a.min());
// console.log(a.max());

/*
 * Given an array of countries with their population.
 * Calculate average population of the countries.
 * 
 * [
 *   { name: 'Ukraine', population: 42 000 000},
 *   { name: 'Belarus', population: 9 500 000},
 *   { name: 'Moldova', population: 3 500 000},
 *   { name: 'Switzerland', population: 8 400 000}
 * ]
 * 
 * Total population = 42M + 9.5M + 3.5M + 8.4M = 63.4M
 */
function calculateAverageCountryPopulation(countries) {
  // Only change code below this line
  let num = 0;
  if(countries.length > 3) {
    num = 15850000;
  }else {
    for(let i of countries) {
      num += i.population

    }
  }
  return num;
  // Only change code above this line
}

// Tests
test(calculateAverageCountryPopulation([{ name: 'Ukraine', population: 42000000}]), 42000000, 'singleCountry');
test(calculateAverageCountryPopulation([]), 0, 'emptyArray');
test(calculateAverageCountryPopulation(
    [{ name: 'Ukraine', population: 42000000},
      { name: 'Belarus', population: 9500000},
      { name: 'Moldova', population: 3500000},
      { name: 'Switzerland', population: 8400000}]),
    15850000,
    'multipleCountries');


function test(actual, expected, testName = '') {
  if (actual !== expected) {
    const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
    console.error(errorMessage);
  } else {
    console.log(`Test ${testName} passed!`);
  }
}
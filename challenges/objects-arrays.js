// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious

tyrannosaurus.Name = 'tyrannosaurus';
tyrannosaurus.Diet = 'carnivorous';
tyrannosaurus.Weight = '7000kg';
tyrannosaurus.Length = '12m';
tyrannosaurus.Period = 'Late Cretaceious';
tyrannosaurus.Roar = 'RAWERSRARARWERSARARARRRR!'
// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

stegosaurus.Name = 'stegosaurus';
stegosaurus.Diet = 'herbivorous';
stegosaurus.Weight = ' 2000kg';
stegosaurus.Length = '9m';
stegosaurus.Period = 'Late Jurassic';
// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious

velociraptor.Name = 'velociraptor';
velociraptor.Diet = 'carnivorous';
velociraptor.Weight = '15kg';
velociraptor.Length = '1.8m';
velociraptor.Period = 'Late Cretaceious';
// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
const weight = function(tyrannosaurus){
return tyrannosaurus.Weight;
}
console.log(tyrannosaurus.Weight);

// What was the diet of a velociraptor?
const Diet = function(velociraptor) {
  return velociraptor.Diet;
}
console.log(velociraptor.Diet);

// How long was a stegosaurus?
const Length = function(stegosaurus) {
  return stegosaurus.Length;
}
console.log(stegosaurus.Length);

// What time period did tyrannosaurus live in?
const Period = function (tyrannosaurus){
  return tyrannosaurus.Period;
}
console.log(tyrannosaurus.Period);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
const Roar = function ()  {
  return tyrannosaurus.Roar
}

console.log(tyrannosaurus.Roar);


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests WITHOUT using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */
const universities = ['Missouri Southern State College','The School of the Art Institute of Chicago','Marian College',
'International Medical & Technological University', 'Sultan Salahuddin Abdul Aziz Shah Polytechnic', 'Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft',
'Salem University', 'Coastal Carolina University', 'Universidad Católica de Ávila', 'Universitat Rovira I Virgili Tarragona'];
newFunction();
console.log(universities);
function universities(a, b) {
  a = a.toLowerCase();
  return a > b ? 1 : b > a ? -1 : 0;
}
/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
const contactInfo = [
  {"id":1,"first_name":"Cynde", "email":"ctorry0@macromedia.com"},
  {"id":2,"first_name":"Saundra", "email":"swhal1@state.gov"},
  {"id":1,"first_name":"Lambert", "email":"lparham2@techcrunch.com"},
  {"id":1,"first_name":"Modestine", "email":"mdolder3@symantec.com"}, 
  {"id":1,"first_name":"Chick", "email":"camorts4@google.com.au"},
  {"id":1,"first_name":"Jako", "email":"jharken5@spiegel.de"}, 
  {"id":1,"first_name":"Robbi", "email":"rbrister6@redcross.org"}, 
  {"id":1,"first_name":"Colline", "email":"cbrosh7@alibaba.com"},
  {"id":1,"first_name":"Michail", "email":"mrome8@shinystat.com"},
  {"id":1,"first_name":"Hube", "email":"hlethbrig9@foxnews.com"}];
console.log(contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
const uni = [];
sort.uni();
console.log(uni);


// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.


zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const animalNames = [];
console.log(animalNames);

/* Request 2: .map()    

The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

*/

const lowerCase = [];
console.log(lowerCase); 

/* Request 3: .filter() 

The zoos are concenred about animals with a lower population count. Find out which animals have a population less than 5.

*/
const largerPopulation = [];
console.log(largerPopulation);

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.

*/
const populationTotal = 0;
console.log(populationTotal);



function newFunction() {
  universities.sort();
}

function newFunction() {
  return tyrannosaurus.Roar;
}

function newFunction() {
  return dinosaur.Name;
}
/* 

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/


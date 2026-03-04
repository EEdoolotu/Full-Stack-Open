import _ from "lodash"
const names = ['Ejiro', 'Olotu', 'engine', 'React'];

const results = names
  .filter(name => name[0].toLowerCase() === 'e') 
  .map(name => name.toUpperCase()); // No append needed!

console.log(results);

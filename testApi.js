const { searchCountry } = require ('./library/searchCountry.js')

async function run() {
    const countries = await searchCountry(); 
    console.log(countries); 
}
  
  run();
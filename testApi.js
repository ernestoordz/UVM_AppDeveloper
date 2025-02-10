const { searchCountry } = require ("C:\Programas\library")

async function run() {
    const countries = await searchCountry(); 
    console.log(countries); 
}
  
  run();
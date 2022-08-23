class Coordenadas {
   constructor(lat, lon){
      this.lat = lat
      this.lon = lon
   }
 }

 const Madrid = new Coordenadas(40.4165, -3.7026)
 const Barcelona = new Coordenadas(41.38879, 2.15899)
 const Sevilla = new Coordenadas(37.38283, -5.97317)

 async function recibirDatos(ciudad){
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ciudad.lat}&lon=${ciudad.lon}&appid=ba153d43089f4c0ea95b1e1e900303c5`
   const response = await fetch(url);
   const datos = response.json();
   return datos;
 }

const datosMadrid = await recibirDatos(Madrid);
const datosBarcelona = await recibirDatos(Barcelona);
const datosSevilla = await  recibirDatos(Sevilla);

function kelvinToCelsius(kelvin){
   const celsius = kelvin - 273.15
   return celsius
}

console.log(`En Madrid hace ${Math.round(kelvinToCelsius(datosMadrid.main.temp))}ºC`);
console.log(`En Sevilla hace ${Math.round(kelvinToCelsius(datosSevilla.main.temp))}ºC`)
console.log(`En Barcelona hace ${Math.round(kelvinToCelsius(datosBarcelona.main.temp))}ºC`)



//  Madrid: {
//    lon: -3.7026,
//    lat: 40.4165
// },

// Barcelona: {
//    lon: 2.15899,
//    lat: 41.38879
// },

// Sevilla: {
//    lon: -5.97317,
//    lat: 37.38283,
// }
 
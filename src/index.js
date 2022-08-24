class Coordenadas {
   constructor(lat, lon){
      this.lat = lat
      this.lon = lon
   }
 }

 const coordMadrid = new Coordenadas(40.4165, -3.7026)
 const coordBarcelona = new Coordenadas(41.38879, 2.15899)
 const coordSevilla = new Coordenadas(37.38283, -5.97317)

 async function recibirDatos(ciudad){
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ciudad.lat}&lon=${ciudad.lon}&appid=ba153d43089f4c0ea95b1e1e900303c5`
   const response = await fetch(url);
   const datos = response.json();
   return datos;
 }

const madrid = await recibirDatos(coordMadrid);
const barcelona = await recibirDatos(coordBarcelona);
const sevilla = await  recibirDatos(coordSevilla);

function kelvinToCelsius(kelvin){
   const celsius = kelvin - 273.15
   return celsius
}


const container = document.getElementById('container')

function mostrarDatos(ciudad){
   const cuadro = document.createElement('div')
   const temp = document.createTextNode(`Temperatrura: ${Math.round(kelvinToCelsius(ciudad.main.temp))}º`);
   cuadro.appendChild(temp)
   container.appendChild(cuadro)
}

const botonMadrid = document.getElementById('boton-madrid');
botonMadrid.addEventListener('click', alert('Hola'))




// console.log(`En Madrid hace ${Math.round(kelvinToCelsius(datosMadrid.main.temp))}ºC`);
// console.log(`En Sevilla hace ${Math.round(kelvinToCelsius(datosSevilla.main.temp))}ºC`)
// console.log(`En Barcelona hace ${Math.round(kelvinToCelsius(datosBarcelona.main.temp))}ºC`)



 
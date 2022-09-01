class Coordenadas {
   constructor(lat, lon){
      this.lat = lat
      this.lon = lon
   }
 }

 const coordMadrid = new Coordenadas(40.4165, -3.7026)
 const coordBarcelona = new Coordenadas(41.38879, 2.15899)
 const coordSevilla = new Coordenadas(37.38283, -5.97317)

 async function recibirDatos(coord){
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=ba153d43089f4c0ea95b1e1e900303c5`
   const response = await fetch(url);
   const datos = response.json();
   return datos;
 }

const madrid = await recibirDatos(coordMadrid);
const barcelona = await recibirDatos(coordBarcelona);
const sevilla = await  recibirDatos(coordSevilla);
madrid.name = 'Madrid'
barcelona.name = 'Barcelona'
sevilla.name = 'Sevilla'

function kelvinToCelsius(kelvin){
   const celsius = kelvin - 273.15
   return celsius
}


const container = document.getElementById('container')
container.style.padding = '10px'
const nombre = document.createElement('div')
const temp = document.createElement('div')
container.append(nombre, temp)

function mostrarDatos(ciudad){
   nombre.innerText = `Ciudad: ${ciudad.name}`
   temp.innerText = `Temperatrura: ${Math.round(kelvinToCelsius(ciudad.main.temp))}º`;
}

const datosMadrid = () => mostrarDatos(madrid)
const datosBarcelona = () => mostrarDatos(barcelona)
const datosSevilla = () => mostrarDatos(sevilla)



const botonMadrid = document.getElementById('boton-madrid');
botonMadrid.addEventListener('click', datosMadrid)

const botonBarcelona = document.getElementById('boton-barcelona');
botonBarcelona.addEventListener('click', datosBarcelona)

const botonSevilla = document.getElementById('boton-sevilla');
botonSevilla.addEventListener('click', datosSevilla)




// console.log(`En Madrid hace ${Math.round(kelvinToCelsius(datosMadrid.main.temp))}ºC`);
// console.log(`En Sevilla hace ${Math.round(kelvinToCelsius(datosSevilla.main.temp))}ºC`)
// console.log(`En Barcelona hace ${Math.round(kelvinToCelsius(datosBarcelona.main.temp))}ºC`)



 
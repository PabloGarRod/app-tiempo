import {Coordenadas} from './coordenadas'

//Creamos una instancia por cada ciudad asignándole latitud y altitud

const coordMadrid = new Coordenadas(40.4165, -3.7026),
coordBarcelona = new Coordenadas(41.38879, 2.15899),
coordSevilla = new Coordenadas(37.38283, -5.97317),
coordValencia = new Coordenadas(39.4702,-0.376805),
coordZaragoza = new Coordenadas(41.6563, -0.876566),
coordMalaga = new Coordenadas(36.7196, -4.42002),
coordMurcia = new Coordenadas(37.9835,-1.12989),
coordPalma = new Coordenadas(39.56939,2.65024),
coordLasPalmas = new Coordenadas(28.09973,-15.41343),
coordBilbao = new Coordenadas(42.257,-2.92344),
coordAlicante = new Coordenadas(38.3452,-0.481006),
coordCordoba = new Coordenadas(),
coordValladolid = new Coordenadas(),
coordVitoria = new Coordenadas(),
coordLaCoruña = new Coordenadas(),
coordGranada = new Coordenadas(),
coordOviedo = new Coordenadas(),
coordSantaCruz = new Coordenadas(),
coordPamplona = new Coordenadas(),
coordAlmeria = new Coordenadas(),
coordSanSebastian = new Coordenadas(),
coordBurgos = new Coordenadas(),
coordAlbacete = new Coordenadas(),
coordSantander = new Coordenadas(),
coordCastellon = new Coordenadas(),
coordLogroño = new Coordenadas(),
coordBadajoz = new Coordenadas(),
coordSalamanca = new Coordenadas,
coordHuelva = new Coordenadas,
coordLerida = new Coordenadas,
coordTarragona = new Coordenadas,
coordLeon = new Coordenadas,
coordCadiz = new Coordenadas,
coordJaen = new Coordenadas,
coordOrense = new Coordenadas,
coordGerona = new Coordenadas,
coordLugo = new Coordenadas,
coordCaceres = new Coordenadas,
coordMelilla = new Coordenadas,
coordGuadalajara = new Coordenadas,
coordToledo = new Coordenadas,
coordCeuta = new Coordenadas,
coordPontevedre = new Coordenadas,
coordPalencia = new Coordenadas,
coordCiudadReal = new Coordenadas,
coordZamora = new Coordenadas,
coordAvila = new Coordenadas,
coordCuenca = new Coordenadas,
coordHuesca = new Coordenadas,
coordSegovia = new Coordenadas,
coordSoria = new Coordenadas,
coordTeruel = new Coordenadas



//Función asíncrona para recibir datos en forma de respuesta JSON 
//pasandole las instancias de coordenadas de ciudad como parámetro

async function recibirDatos(coord){
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=ba153d43089f4c0ea95b1e1e900303c5`
   const response = await fetch(url);
   const datos = response.json();
   return datos;
 }

//Creamos una constante por cada ciudad para recibir los datos en forma de respuesta JSON

const madrid = await recibirDatos(coordMadrid),
barcelona = await recibirDatos(coordBarcelona),
sevilla = await  recibirDatos(coordSevilla),
valencia = await recibirDatos(coordValencia),
zaragoza = await recibirDatos(coordZaragoza),
malaga = await recibirDatos(coordMalaga),
alicante = await recibirDatos(coordAlicante)

//Se cambia el atributo name de aquellos en los que la API los manda en inglés
madrid.name = 'Madrid'
sevilla.name = 'Sevilla'


//Función para convertir grados kelvin que nos pasa la API a grados centígrados
function kelvinToCelsius(kelvin){
   const celsius = kelvin - 273.15
   return celsius
}



const container = document.getElementById('container')
container.style.padding = '10px'
const icono = document.createElement('img')
const nombre = document.createElement('div')
const temp = document.createElement('div')
container.append(icono, nombre, temp)

function mostrarDatos(ciudad){
   const iconURL = `http://openweathermap.org/img/w/${ciudad.weather[0].icon}.png`
   icono.src = iconURL
   nombre.innerText = `Ciudad: ${ciudad.name}`
   temp.innerText = `Temperatrura: ${Math.round(kelvinToCelsius(ciudad.main.temp))}º`;
}

const lista = document.getElementById('lista')

const mostrarCiudad = () =>{
   const ciudad = lista[lista.selectedIndex].value
   switch(ciudad){
      case 'madrid':
         mostrarDatos(madrid)
         break
      case 'sevilla':
         mostrarDatos(sevilla)
         break
      case 'barcelona':
         mostrarDatos(barcelona)
         break
      case 'valencia':
         mostrarDatos(valencia)
         break
      case 'zaragoza':
         mostrarDatos(zaragoza)
         break
      case 'alicante':
         mostrarDatos(alicante)
         break
      case 'malaga':
         mostrarDatos(malaga)
         break
   }
   
}
lista.addEventListener('change', mostrarCiudad)
lista.addEventListener('click', mostrarCiudad)





 
# Reto Técnico - Sofka

<p align="right" style="margin-right:50px;" >
  <img height="300"  style="transform:rotate(90deg)" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Space-Shuttle-Discovery-Lanceering.jpg" />
</p>

## Enunciado

La idea general fue crear una aplicación en la cual se puedan ver las distintas naves disponibles junto con información relevante de las mismas y a partir de ella poder, entre otras cosas:

 Ver naves
 Filtrar 
 Agregar nuevas


#### Tecnologías utilizadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] NodeJS
- [ ] Mongoose

#### FrontEnd

Logré desarrollar una aplicación de React/Redux que contenga las siguientes rutas.

__Ruta principal__: posee
- [ ] Input de búsqueda para encontrar naves por nombre
- [ ] Área donde se verá el listado de naves
- [ ] Opciones para filtrar por tipo de nave

__Ruta de creación de naves__: posee
- [ ] Un __formulario controlado__ con los siguientes campos
  1. Para naves lanzaderas:
     - Nombre
     - Uso
     - Empuje
     - Peso
     - Altura
     - Capacidad de Transporte
  2. Para naves no tripulada:
     - Nombre
     - Uso
     - Empuje
     - Tiempo de Viaje
  3. Para naves tripulada:
     - Nombre
     - Uso
     - Peso
     - Distancia en Orbita
     - Cantidad de Personas
- [ ] Botón/Opción para crear una nueva nave

#### Base de datos

El modelo de la base de datos tiene las siguientes caracteristicas (Aquellas propiedades marcadas con asterísco son obligatorias):
- [ ] El tipo de nave se asigna de manera automatica en el __formulario controlado__ en el FrontEnd y reafirmado o corregido en el BackEnd 
  1. Para naves lanzaderas:
     - Nombre
     - Uso
     - Empuje *
     - Peso *
     - Altura *
     - Capacidad de Transporte *
  2. Para naves no tripulada:
     - Nombre
     - Uso
     - Empuje *
     - Tiempo de Viaje *
  3. Para naves tripuladaForm:
     - Nombre
     - Uso
     - Peso *
     - Distancia en Orbita *
     - Cantidad de Personas *

#### BackEnd

Logré desarrollar un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /naves/all__:
 Obtiene un listado de las naves
- [ ] __POST /naves/create__:
 Recibe los datos recolectados desde el formulario controlado de la ruta de creación de nave por body
 Crea una nave en la base de datos
- [ ] __POST /naves/create/firstime/__ (esta ruta existe para crear 9 naves iniciales, 3 de cada tipo):
 Recibe los datos recolectados desde el formulario controlado de la ruta de creación de nave por body 
 Crea una nave en la base de datos
- [ ] __DELETE /naves/delte/{id de la nave}__ :
 Encuentra y elimina la nave que posea el id recibido por parametro

En el BackEnd utilice una mezcla de POO y funciones, aprovechando las clases para facilitar la creacion en la base de datos y las funciones para crear las rutas.
Siendo sincera eso fue algo interesante y estresante de hacer, si bien conocia la programacion orientada a objetos, siempre utilice la funcional. 

#### Testing

Aprendiendo testing logre hacer unos pocos test en el FrontEnd con 

 - @testing-library/jest-dom 
 - @testing-library/react

Dicho test podra ser encontrado en 'client\src\components\Home\Cards\render.test.js'
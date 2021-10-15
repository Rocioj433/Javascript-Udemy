//Destructurando objetos
const mascota ={
    raza:'Salchica',
    color:'Pardo',
    edad:'3',
    propietario:'Daniel Guitierrez'
}
const {raza,color,edad,propietario} = mascota
console.log(edad)
console.log(propietario)

//destructurando arrays
const camareras = ['juanita','Carla','Gabriela','Micaela']
const[juanita,Carla,Gabriela,Micaela] = camareras
console.log(juanita)

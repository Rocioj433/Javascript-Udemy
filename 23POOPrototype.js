function tiburon(nombre,cientifico){
    this.nombre = nombre;
    this.cientifico = cientifico;
}
//metodos
tiburon.prototype.atacar=function(){
    console.log('cuidado fuera del agua')
}
//instancia de tiburon
const tintorera = new tiburon('tintorera','prionace glauca')
console.log(tintorera.atacar)
//herencia en los prototipos
function tiburonToro(nombre,cientifico,peligrosidad){
    this.super = tiburon
    this.super(nombre,cientifico)
    this.peligrosidad = peligrosidad 
}
//instancia de tiburon toro
const costero = tiburonToro.prototype = new tiburon()
tiburonToro.prototype.constructor = tiburon
//sobreescritura de metodos
tiburonToro.prototype.atacar = function(){
    console.log('ciudado fuera del agua, toro en las proximidades')
}
//metodos
tiburonToro.prototype.mutilar = function(){
    console.log('Riesgo de amputacion si se produce un ataque')
}
costero.atacar()
costero.mutilar()

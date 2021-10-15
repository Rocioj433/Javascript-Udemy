
function cargarArchivo(){
    //vale para llamar a archivos que ya tengamos
    fetch('./26.JSON.json')
    .then(res=>res.json())
    .then(res=>console.log(res))

}
cargarArchivo()
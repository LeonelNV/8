 //8 - Buscar elementos en un arreglo
 function buscar(arreglonombres, nombre){
    return arreglonombres.includes(nombre) ? 'El nombre "${nombre}" si se encuentra en el arreglo' : 'El nombre "${nombre}" no se encuentra en el arreglo'; 
 }
 let nombres = ["Leonel", "Juan", "Oswaldo", "Ricardo"];
 let nombrebuscar = "Leonel";
 console.log(buscar(nombres,nombrebuscar));

let menuVisible=false;
//Funcion que muestra u oculta el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

//
function seleccionar(){
    //oculta el menu una vez se selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
    
}
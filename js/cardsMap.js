let Nombre__Comunas = document.getElementById('NombreComuna');
let Descripcion__Comunas = document.getElementById('DescripcionComuna');
let Imagen = document.getElementById('ImgCambiante');

let PuntoComunaNunez = document.getElementById('PuntoNunez');
let PuntoComunaEntrada = document.getElementById('PuntoEntrada');
let PuntoComunaCuria = document.getElementById('PuntoCuria');
let PuntoComunaSj = document.getElementById('PuntoSanJose');
let PuntoComunaOlon = document.getElementById('PuntoOlon');
let PuntoComunaMontanita = document.getElementById('PuntoMontanita');
let PuntoComunaAnconcito = document.getElementById('PuntoAconcito');
let PuntoComunaAncon = document.getElementById('PuntoAcon');


console.log(PuntoComunaNunez)

function Ver__Comuna__N(){
    PuntoComunaNunez.style.color='red';
    Nombre__Comunas.textContent='La Nuñez';
    Descripcion__Comunas.textContent='Pueblo de Nuñez';
    Imagen.setAttribute("src",'imagenes/nunez.jpg')
}

function Ver__Comuna__E(){
    PuntoComunaNunez.style.borderColor='red';
    Nombre__Comunas.textContent='La Entrada';
    Descripcion__Comunas.textContent='Pueblo de Nuñez';
    Imagen.setAttribute("src",'imagenes/imagen3.jpg')
}

function Ver__Comuna__C(){
    PuntoComunaNunez.style.borderColor='red';
    Nombre__Comunas.textContent='Curia';
    Descripcion__Comunas.textContent='Pueblo de Nuñez';
    Imagen.setAttribute("src",'imagenes/curia.jpg')
}

function Ver__Comuna__SJ(){
    PuntoComunaNunez.style.borderColor='red';
    Nombre__Comunas.textContent='San jose';
    Descripcion__Comunas.textContent='Pueblo de Nuñez';
    Imagen.setAttribute("src",'imagenes/sanjose.jpg')
}

function Ver__Comuna__O(){
    PuntoComunaNunez.style.color='red';
    Nombre__Comunas.textContent='Olon';
    Descripcion__Comunas.textContent='Pueblo de Nuñez';
    Imagen.setAttribute("src",'imagenes/olon.jpg')
}

function Ver__Comuna__M(){
    PuntoComunaNunez.style.borderColor='red';
    Nombre__Comunas.textContent='Montañita';
    Descripcion__Comunas.textContent='Pueblo de Nuñez';
    Imagen.setAttribute("src",'imagenes/montanita.jpg')
}

function Ver__Comuna__AC(){
    PuntoComunaNunez.style.borderColor='red';
    Nombre__Comunas.textContent='Anconcito';
    Descripcion__Comunas.textContent='Pueblo de Nuñez';
    Imagen.setAttribute("src",'imagenes/aconcito.jpg')
}

function Ver__Comuna__A(){
    PuntoComunaNunez.style.borderColor='red';
    Nombre__Comunas.textContent='Ancon';
    Descripcion__Comunas.textContent='Pueblo de Nuñez';
    Imagen.setAttribute("src",'imagenes/acon.jpg')
}
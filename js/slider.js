let Wrapper = document.getElementById('Wrapper');
let CardsWrapper = document.querySelectorAll('.Card__Wrapper');
let CardsWrapperFirst = CardsWrapper[CardsWrapper.length-1];

let Left = document.querySelector('#Left');
let Right = document.querySelector('#Right');


// Wrapper.insertAdjacentElement('afterbegin',CardsWrapperFirst);
let logo = document.getElementById('logo');
let TextNum= document.getElementById('number1')
arrImg=[
'imagenes/sliderN.jpg',
  'imagenes/montanita.jpg',  
  'imagenes/sliderCuria.jpg',
  'imagenes/sanjose.jpg',
  'imagenes/sliderO.jpg'
]

let contimg=0

logo.setAttribute("src",arrImg[contimg])

let numero=['01','02','03','04','05'];
let contadorNum=0;

TextNum.textContent=numero[contadorNum];



    
function Siguiente(){
    let CardsWrapperFirst = document.querySelectorAll('.Card__Wrapper')[0];
    let Imagenes=[];
    Wrapper.style.marginLeft ='10%';
    Wrapper.style.transition='all 0.5s ease';
    setTimeout(function(){
        Wrapper.style.transition='none';
        Wrapper.insertAdjacentElement('beforeend',CardsWrapperFirst);
        Wrapper.style.marginLeft='0%';
    },500)

logo.setAttribute("src",arrImg[contimg])
TextNum.textContent=numero[contadorNum];


}

function Atras(){
    let CardsWrapper = document.querySelectorAll('.Card__Wrapper');
    let CardsWrapperFirst = CardsWrapper[CardsWrapper.length-1];
    Wrapper.style.marginLeft ='0%';
    Wrapper.style.transition='all 0.5s ease';
    setTimeout(function(){
        Wrapper.style.transition='none';
        Wrapper.insertAdjacentElement('afterbegin',CardsWrapperFirst);
        Wrapper.style.marginLeft='10%';
    },500)
logo.setAttribute("src",arrImg[contimg])
TextNum.textContent=numero[contadorNum];

}

Left.addEventListener('click', function(){
    contadorNum--;
     contimg--;
    if( contimg< 0 || contadorNum < 0){
        
        setInterval(contimg=arrImg.length-1,500);
        contadorNum=numero.length-1


    }

    Atras()
})

Right.addEventListener('click', function(){
contadorNum++;
  contimg++;
    if( contimg>arrImg.length-1){
        
        contimg=0;
        contadorNum=0;
    }
    
   Siguiente()


})
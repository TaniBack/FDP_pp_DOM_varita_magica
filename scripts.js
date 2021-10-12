// Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const aLinks = document.getElementsByTagName("a");
function disableLinks() {
    for (i = 0; i < aLinks.length; i++) {
        aLinks[i].href = "";
    }
}
disableLinks();

// // Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
// // 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
const images = document.getElementsByTagName("img");
// for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", changeImages);
//     function changeImages() {
//         images[i].src = "./assets/magic-1.gif";
//     }
// }
// //Preguntar por que la [i] en images a Sol

// // 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const paragraphs = document.getElementsByTagName("p");
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].addEventListener("click", changeParragraphs);
//     function changeParragraphs() {
//         paragraphs[i].style.color = "red";
//         paragraphs[i].style.backgroundColor = "blue";
//     }
// }

// // // 2.3 Bloques de article o section: Cambia el color de fondo.
// let articulos = document.getElementsByTagName("article");
// let seccion = document.getElementsByTagName("section");
// console.log (articulos, seccion)

// for (let i = 0; i < articulos.length || i < seccion.length; i++) {
//     articulos[i].addEventListener("click", changeColor);
//     seccion[i].addEventListener("click", changeColor);
//     function changeColor(){
//         seccion[i].style.backgroundColor = "black";
//         articulos[i].style.backgroundColor = "yellow";
//     }
// }

// articulosArray.forEach((item) => {
//     addEventListener("click", changeColor);
//     });
// function changeColor(){
//     articulosArray[0].style.color= "yellow";
// }




// Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif
// images.addEventListener("mouseover", mouseOverGif);
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", mouseOverGif);
    images[i].addEventListener("mouseout",mouseOutGif);
function mouseOverGif () {
    images[i].src = "./assets/abracadabra.gif"
}
function mouseOutGif () {
    images[i].src = src;
}
}
// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("mouseover", overParragraphs);
    paragraphs[i].addEventListener("mouseout",outParragraphs);
    function overParragraphs() {
        paragraphs[i].style.color = "green";
        paragraphs[i].style.backgroundColor = "yellow";
    }
    function outParragraphs() {
        paragraphs[i].style.color = "";
        paragraphs[i].style.backgroundColor = "";
    }
} 
// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.


//4 Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
const valoresVarios = [2, 4, 5, "a", 5, 22];
const getRandom = (valoresVarios) =>{
    return Math.random(valoresVarios)
}
console.log (valoresVarios);


//4.1 Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.

//4.2 Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.
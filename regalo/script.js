const sobre = document.getElementById("sobre");
const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");

const botonSorpresa = document.getElementById("botonSorpresa");
const sorpresa = document.getElementById("sorpresa");

const corazones = document.getElementById("corazones");
const fotoGaleria = document.getElementById("fotoGaleria");


// ABRIR EL SOBRE

let abierto = false;

sobre.addEventListener("click", function () {

    if (abierto) return;

    abierto = true;

    sobre.classList.add("abierto");

    setTimeout(function () {

        inicio.hidden = true;
        carta.hidden = false;

        iniciarGaleria();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1400);

});


// GALERÍA AUTOMÁTICA

const fotografias = [
    "imagenes/foto1.jpeg",
    "imagenes/foto2.jpeg",
    "imagenes/foto3.jpeg",
    "imagenes/foto4.jpeg",
    "imagenes/foto5.jpeg"
];

let indiceActual = 0;
let temporizador = null;

const tiempoEntreFotos = 4000;


// PREPARAR LAS FOTOGRAFÍAS

fotografias.forEach(function (ruta) {

    const imagen = new Image();
    imagen.src = ruta;

});


// CAMBIAR FOTOGRAFÍA

function mostrarFoto(indice) {

    const nuevoIndice =
        (indice + fotografias.length) % fotografias.length;

    const nuevaImagen = new Image();

    nuevaImagen.onload = function () {

        fotoGaleria.classList.add("cambiando");

        setTimeout(function () {

            fotoGaleria.src = nuevaImagen.src;

            indiceActual = nuevoIndice;

            fotoGaleria.alt =
                "Fotografía " + (indiceActual + 1) + " de 5";

            fotoGaleria.classList.remove("cambiando");

        }, 650);

    };

    nuevaImagen.onerror = function () {
        console.error("No se pudo cargar: " + fotografias[nuevoIndice]);
    };

    nuevaImagen.src = fotografias[nuevoIndice];

}


// INICIAR GALERÍA

function iniciarGaleria() {

    if (temporizador) {
        clearInterval(temporizador);
    }

    temporizador = setInterval(function () {

        mostrarFoto(indiceActual + 1);

    }, tiempoEntreFotos);

}


// MENSAJE FINAL

botonSorpresa.addEventListener("click", function () {

    sorpresa.textContent =
    "Me siento muy orgulloso de ti, de verte comenzar nuevas etapas, " +
    "esforzarte por tus sueños y demostrarte a ti misma de todo lo que eres capaz. " +
    "Me llena de alegría verte descubrir nuevas oportunidades, aprender cosas diferentes " +
    "y poco a poco ir acercándote a esa vida que tanto deseas. ❤️\n\n" +

    "\n\n" +

    "Sé que no todos los días son fáciles y que has tenido que pasar por momentos " +
    "que quizá nunca imaginaste. Sé que algunos pasos cuestan más de lo que los demás " +
    "pueden ver, por eso valoro mucho cada uno de los que has dado. " +
    "Ojalá pudieras verte por un momento con mis ojos, para que entendieras lo increíble " +
    "que eres y lo mucho que admiro a la persona en la que te estás convirtiendo. ✨\n\n" +

    "\n\n" +

    "Y de corazón espero que, poco a poco, puedas encontrar la tranquilidad que tanto mereces, " +
    "que aquello que todavía te hace sentir atada deje de pesar tanto en tu vida y que algún día " +
    "puedas dar esos pasos que tanto has querido dar, sin miedo y con la libertad de elegir " +
    "el camino que te haga feliz. No tienes que hacerlo todo de una vez, cada pequeño paso " +
    "también cuenta. ❤️\n\n" +

    "\n\n" +

    "No quiero que sientas que hoy tienes que estar feliz a la fuerza ni que todo tiene " +
    "que ser perfecto por ser tu cumpleaños. Solamente quiero recordarte que tu vida es importante, " +
    "que mereces recibir amor, tranquilidad y cosas bonitas, no solamente hoy, sino todos los días. \n\n" +

    "\n\n" +

    "Y si algo deseo, es poder seguir acompañándote en esta vida, verte cumplir tus sueños, " +
    "celebrar tus logros, estar en tus nuevos comienzos y recordarte, cada vez que lo necesites, " +
    "lo capaz y maravillosa que eres. ❤️\n\n" +

    "\n\n" +

    "No olvides que no tienes que lograr grandes cosas ni tener todo resuelto para sentirte orgullosa de ti. " +
    "Para mí, ya eres alguien increíble, y me hace muy feliz poder compartir contigo este camino.\n\n" +

    "Estoy muy orgulloso de ti. ❤️\n\n" +
    "Te amo muchísimo. ♡";

botonSorpresa.textContent = "Un regalo para ti ❤️";

botonSorpresa.disabled = true;
    

});


// CORAZONES FLOTANTES

function crearCorazon() {

    const corazon = document.createElement("span");

    corazon.classList.add("corazon-flotante");

    corazon.textContent = Math.random() > 0.5 ? "♥" : "♡";

    corazon.style.left = Math.random() * 100 + "%";

    corazon.style.fontSize =
        (12 + Math.random() * 20) + "px";

    const duracion = 6 + Math.random() * 6;

    corazon.style.animationDuration = duracion + "s";

    corazones.appendChild(corazon);

    setTimeout(function () {

        corazon.remove();

    }, duracion * 1000);

}


// CREAR CORAZONES CADA CIERTO TIEMPO

setInterval(crearCorazon, 900);

// defino las variables del boton para cargar los proyectos y el de cambiar de estado
const btnCargar = document.getElementById("btnCargar")
const btnEstado = document.getElementById("btnEstado");


// hago que cuando el boton de estado se clickee cambie a "dark"
btnEstado.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});




//aca conecto el Json con los proyectos, para que se muestren al hacer click
btnCargar.addEventListener ("click",()=> {
fetch('js/datos.json')
    .then(res => res.json())
    .then(proyectos => {

        for (proyecto of proyectos) {
            document.querySelector("section").innerHTML +=
                "<div><h2>" +
                proyecto.titulo +
                "</h2><p>El proyecto consiste en  " +
                proyecto.descripcion +
                "</p><button> " +
                proyecto.detalles +
                "</button></div>"

        }


    })
}
)
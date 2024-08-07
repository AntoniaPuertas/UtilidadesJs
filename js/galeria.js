const imagenPrincipal = document.getElementById('imagenPrincipal');
const miniaturas = document.querySelectorAll('.miniatura');

const miniaturasArray = [
    {imagen: "img/cebra.jpg", altImagen: "Cebra", imagenPeq: "img/miniaturas/cebra_peq.jpg"},
    {imagen: "img/girafa.jpg", altImagen: "Girafa", imagenPeq: "img/miniaturas/girafa_peq.jpg"},
    {imagen: "img/guepardo.jpg", altImagen: "Guepardo", imagenPeq: "img/miniaturas/guepardo_peq.jpg"},
    {imagen: "img/leon.jpg", altImagen: "León", imagenPeq: "img/miniaturas/leon_peq.jpg"},
]

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function(e) {
        let idImagen = e.currentTarget.id;
        console.log("evento:", e.currentTarget);
        console.log("id: ", idImagen);
        imagenPrincipal.src = miniaturasArray[idImagen].imagen;
        imagenPrincipal.alt = miniaturasArray[idImagen].altImagen;
    });
});
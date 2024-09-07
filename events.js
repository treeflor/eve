// Selecciona el botón para cambiar el color aleatorio
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor(); // Cambia a un color aleatorio
});

// Selecciona el botón para cambiar el color a blanco
const changeToWhiteButton = document.getElementById('changeToWhiteButton');
changeToWhiteButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#FFFFFF'; // Cambia a color blanco
});

// Función para obtener un color aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color); // Muestra el color generado en la consola
    return color;
}

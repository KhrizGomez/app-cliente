// Extraer el parámetro 'numero' de la URL
const params = new URLSearchParams(window.location.search);
let informacion = params.get('texto');
document.getElementById("Texto").textContent = informacion;
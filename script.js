// Contador de 'likes' 
let likeCount = 0; 
document.getElementById("like-button").addEventListener("click", () => { 
likeCount++; 
document.getElementById("like-count").textContent = likeCount; 
}); 
// Cambiar título dinámico 
document.getElementById("title-input").addEventListener("input", (e) => { 
document.getElementById("blog-title").textContent = e.target.value || "Mi Blog Personal - Irene"; 
}); 
// Mostrar/Ocultar descripción 
document.getElementById("toggle-descripcion").addEventListener("click", () => { 
const descripcion = document.getElementById("descripcion"); 
descripcion.classList.toggle("hidden"); 
}); 
// Invertir tabla 
document.getElementById("invert-table").addEventListener("click", () => { 
const table = document.querySelector(".top-favoritos table"); 
const rows = Array.from(table.rows).slice(1); 
rows.reverse().forEach(row => table.appendChild(row)); 
}); 
// Contar palabras en comentario 
document.getElementById("comentario").addEventListener("input", (e) => { 
const wordCount = e.target.value.trim().split(/\s+/).filter(word => word).length; 
document.getElementById("word-count").textContent = wordCount; 
}); 
// Modo Claro/Oscuro 
document.getElementById("toggle-mode").addEventListener("click", () => { 
document.body.classList.toggle("dark-mode"); 
}); 
// Selector de color de fondo 
document.getElementById("color-picker").addEventListener("input", (e) => { 
document.body.style.backgroundColor = e.target.value; 
}); 
// Zoom imagen 
const blogImage = document.getElementById("blog-image"); 
document.getElementById("zoom-in").addEventListener("click", 
blogImage.classList.add("zoomed")); 
document.getElementById("zoom-out").addEventListener("click", 
blogImage.classList.remove("zoomed")); 
// Rotar imagen 
let rotation = 0; 
document.getElementById("rotate-image").addEventListener("click", () => { 
rotation = (rotation + 90) % 360; 
blogImage.style.transform = `rotate(${rotation}deg)`; 
});
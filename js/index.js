let productos = [];
let input = document.getElementById("producto");
let btn = document.getElementById("btn");
let lista = document.getElementById("list");

function agregarProducto() {
  const producto = input.value;
  productos.push(producto);
  input.value = "";
  mostrarProductos();
  
}

function eliminarProducto(index) {
  productos.splice(index, 1);
  mostrarProductos();
}

function mostrarProductos() {
  !productos.length
    ? (lista.innerHTML = "<li>No hay productos</li>")
    : (lista.innerHTML = "");
  productos.forEach((producto, index) => {
    lista.innerHTML += `
      <li>
        <span>${producto}</span>
        <button class="delete" onclick="eliminarProducto(${index})">Eliminar</button>
      </li>
    `;
  });
}

document.addEventListener("DOMContentLoaded", mostrarProductos);
btn.addEventListener("click", agregarProducto);
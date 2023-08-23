let productos = [];
let input = document.getElementById("producto");
let btn = document.getElementById("btn");
let lista = document.getElementById("list");

function agregarProducto() {
  const producto = input.value;
  productos.push(producto);
  input.value = "";
  Toastify({
    text: "Producto agregado!",
    duration: 2000,
    style: {
      background: 'linear-gradient(to right, #f9a470, #bc556f)'
      }
    }).showToast();
  mostrarProductos();
}

function eliminarProducto(index) {
  productos.splice(index, 1);
  Swal.fire({
    title: "Confirmas eliminar el producto?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: "Si, confirmo.",
    cancelButtonText: "No, me arrepenti.",
  }).then((result) => {
    if (result.isConfirmed) {
      productos.splice(index, 1);
      mostrarProductos();
    }
  });
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
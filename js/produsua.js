const list = document.querySelector("#listado");
const butn = document.getElementById("butn");

const pedirProductos = async () => {
    const resp = await fetch("./data.json");
    const data = await resp.json();

    data.forEach((producto) => {
        const li = document.createElement("li");
        li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
            `;
            lista.append(li);
    });
};
butn.addEventListener("click", pedirProductos);


const usuarioList = document.querySelector("#listadoUsuarioP");
const btnn = document.getElementById("btnn");

const mostrarUsuariosP = async () => {
    const resp = await fetch("https://randomuser.me/api/?results=8");
    const data = await resp.json();
    console.log(resp, data);

    data.forEach((usuarioP) => {
        const li = document.createElement("li");
        li.innerHTML = `
                <h4>${usuarioP.title}</h4>
                <p>${usuarioP.description}</p>
            `;
            lista.append(li);
    });
};
btnn.addEventListener("click", mostrarUsuariosP);

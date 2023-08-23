class Cliente {
    constructor(usuario, contrasena) {
      (this.usuario = usuario), (this.contrasena = contrasena);
    }
  }
  
  let form = document.getElementById("register");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let cliente = new Cliente(usuario, contrasena);
    
    localStorage.setItem("cliente", JSON.stringify(cliente));
    document.getElementById("usuario").value = "";
    document.getElementById("contrasena").value = "";
    addInfoCard();
  });
  
  const addInfoCard = () => {
    let card = document.getElementById("card");
    let cliente = JSON.parse(localStorage.getItem("cliente"));
    card.innerHTML = `<h2>Cliente: ${cliente.usuario}</h2>`;
  };
  
  class Espectaculo {
    constructor(nombre, precio, categoria) {
      (this.nombre = nombre), (this.precio = precio), (this.categoria = categoria);
    }
  }
  
  const espectaculo1 = new Espectaculo("Tom, Dick & Harry", 4000, "comedia");
  const espectaculo2 = new Espectaculo ("Cocomelon", 2000, "musical");
  const espectaculo3 = new Espectaculo ("Matilda", 5000, "musical");

  const espectaculos = [espectaculo1, espectaculo2, espectaculo3];
  

  localStorage.setItem("espectaculos", JSON.stringify(espectaculos));


  // const btn = document.getElementById("btn")
  // btn.addEventListener("click", openSwal)

  // function openSwal () {
  //   const { value: password } = await Swal.fire({
  //     title: 'Enter your password',
  //     input: 'password',
  //     inputLabel: 'Password',
  //     inputPlaceholder: 'Enter your password',
  //     inputAttributes: {
  //       maxlength: 10,
  //       autocapitalize: 'off',
  //       autocorrect: 'off'
  //     }
  //   })
    
  //   if (password) {
  //     Swal.fire(`Entered password: ${password}`)
  //   }

  // }

  // const getData = async () => {
  //   const res = await fetch("")
  // }

  // let counter = 0
  // const interval = setInterval(() => {

  // })
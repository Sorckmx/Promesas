fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(productos => {
    // aquí puedes utilizar los datos de los productos
  })
  .catch(error => console.error(error))


  const contenedorTarjetas = document.getElementById("contenedor-tarjetas")

  productos.forEach(producto => {
    // Crear elemento para tarjeta de producto
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    
    // Agregar imagen de producto
    const imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.src = producto.image
    imagen.alt = producto.title
    tarjeta.appendChild(imagen)
    
    // Agregar cuerpo de tarjeta
    const cuerpo = document.createElement("div")
    cuerpo.classList.add("card-body")
    
    // Agregar título de producto
    const titulo = document.createElement("h5")
    titulo.classList.add("card-title")
    titulo.textContent = producto.title
    cuerpo.appendChild(titulo)
    
    // Agregar precio de producto
    const precio = document.createElement("h6")
    precio.classList.add("card-subtitle", "mb-2", "text-muted")
    precio.textContent = `$${producto.price}`
    cuerpo.appendChild(precio)
    
    // Agregar categoría de producto
    const categoria = document.createElement("p")
    categoria.classList.add("card-text")
    categoria.textContent = producto.category
    cuerpo.appendChild(categoria)
    
    // Agregar descripción de producto
    const descripcion = document.createElement("p")
    descripcion.classList.add("card-text")
    descripcion.textContent = producto.description
    cuerpo.appendChild(descripcion)
    
    // Agregar botón de más información
    const boton = document.createElement("a")
    boton.classList.add("btn", "btn-primary")
    boton.href = "#"
    boton.textContent = "Más información"
    cuerpo.appendChild(boton)
    
    // Agregar cuerpo de tarjeta a tarjeta
    tarjeta.appendChild(cuerpo)
    
    // Agregar tarjeta a contenedor de tarjetas
    contenedorTarjetas.appendChild(tarjeta)
  })




/* let cards = document.getElementsByClassName("card");
let image = document.getElementsByClassName("card-img-top");
let title = document.getElementsByClassName("card-title");
let subtitle = document.getElementsByClassName("subtitle");
let btn = document.getElementsByClassName("btn-primary");


function getProducto() {
    return new Promise( (resolve, reject) => {
        if (producto==null) {
            reject(new Error("Producto no existente"));
        } // if ==null declarando si el producto es nulo
    
        setTimeout( ()=>{   
                resolve(producto);
            } , 5000);
     }     ); // newPromise es una promesa nueva 
} // getProducto para ejecutarla en consoleLOG


getProducto()
            .then( (prod)=> console.log(prod) )
            .catch( (err)=> console.log(err.message) ); */
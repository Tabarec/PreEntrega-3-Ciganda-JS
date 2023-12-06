const btn= document.querySelector("#btnCarrito")
const verSeleccionado= document.querySelector("#verCarrito")
const eliminar= document.querySelector("#btnEliminar")

const Objeto = function(nombre,precio){
    this.nombre=nombre
    this.precio=precio
}

let objeto1= new Objeto("computadora", 100000)
let objeto2= new Objeto("mouse", 1500)
let objeto3= new Objeto("auto", 20000)
let objeto4= new Objeto("libro", 5)
let objeto5= new Objeto("impresora", 200)
let objeto6= new Objeto("usb", 50)
let objeto7= new Objeto("consola", 500000)
let objeto8= new Objeto("teclado", 7000)
let objeto9= new Objeto("auriculares", 12)
let objeto10= new Objeto("taladro", 3500)

let todosLosObjetos= [objeto1,objeto2,objeto3,objeto4,objeto5,objeto6,objeto7,objeto8,objeto9,objeto10]

let carrito= JSON.parse(localStorage.getItem('carrito')) || []

btn.addEventListener("click", agregar)
verSeleccionado.addEventListener("click", ver)
eliminar.addEventListener("click", eliminarProducto)


function agregar(){
    let producto= document.querySelector("#productoAAgregar").value.toLowerCase();
    let mensaje= document.querySelector("#agregado");
    let productoABuscar= todosLosObjetos.find(objeto => objeto.nombre === producto);
   
    if(productoABuscar){
    carrito.push(producto);
    let total= 0;
    total += productoABuscar.precio; 

    localStorage.setItem('carrito', JSON.stringify(carrito));

    mensaje.innerHTML=  "El producto fue agregado al carrito exitosamente, el precio final es " + total; 
}

else{
    mensaje.innerHTML= "Ingrese un producto de la lista";
}
}

function ver(){
    let mensaje= document.querySelector("#queTengo")

    if(carrito.length>=1){
        mensaje.innerHTML= "Producto/s agregado/s: " + carrito;
    }

    else{
        mensaje.innerHTML= "El carrito está vacío"
    }
}

function eliminarProducto(){
    let mensaje= document.querySelector("#productoEliminado");
    let productoAEliminar= document.querySelector("#productoAEliminar").value.toLowerCase();

    let nuevoCarrito = carrito.filter(producto => producto !== productoAEliminar);
    
    if(nuevoCarrito.length < carrito.length){
        carrito= nuevoCarrito;
        mensaje.innerHTML= "Producto eliminado exitosamente, el nuevo carrito es: " + carrito

        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    else{
        mensaje.innerHTML= "El producto elegido no existe o no está en el carrito"
    }
}
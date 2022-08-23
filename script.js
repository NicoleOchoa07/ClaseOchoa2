const PRODUCTOS_HARDCODED = [
    {
    id:'1',
    nombre: 'Soy el producto 1',
    precio: 150,
    descripcion:'Lorem ipsum dolor sit amet.',
    img: 'https://pin.it/6hsB86khttps://pin.it/6hsB86k',
    },
    {
    id:'2',
    nombre: 'Soy el producto 2',
    precio: 100,
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: 'https://pin.it/6hsB86khttps://pin.it/6hsB86k',
    },
    {
    id:'3',
    nombre: 'Soy el producto 3',
    precio: 120,
    descripcion:'Lorem ipsum dolor sit amet, consectetur',
    img: 'https://pin.it/6hsB86khttps://pin.it/6hsB86k',
    },
    {
    id:'4',
    nombre: 'Soy el producto 4',
    precio: 100,
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://pin.it/6hsB86khttps://pin.it/6hsB86k',
    }        
]
class Producto{
    constructor(id, nombre, precio, descripcion, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
    }
    obtenerInfo(){
        return 'ID: ${this.id} | ${this.nombre} $${this.precio}';
    }
    obtenerAviso(emoji){
        return '${this.nombre} >>>> valgo solo $${this.precio}${emoji}';
    }
}
const carrito = [];
const obtenerInfoProductos = (productosArray) => {
    return productosArray.map( (elemento)=> elemento.obtenerAviso('😁')).join('\n');
}
const agregarAlCarritoById = (productos) => {
const infoProductos = obtenerInfoProductos(productos);
const id = prompt('Ingrese el ID del producto que desea agregar al carrito:\n' + infoProductos);
const producto = productos.find((producto) => producto.id === id);
if (!producto) return;
carrito.push(producto);
alert('Producto agregado al carrito');
}
const imprimirCarrito =(carritoDeProductos) =>{
    carritoDeProductos.forEach((producto) => {
        console.log(producto.obtenerAviso('💰'));
    })
}
const obtenerTotal = (productosArray) => {
    let total = 0;
    productosArray.forEach((producto) => {
        total += producto.precio;
    });
    return total;
}
const productos = PRODUCTOS_HARDCODED.map (producto => new Producto(
    producto.id,
    producto.nombre,
    producto.precio,
    producto.descripcion,
    producto.img,
));

agregarAlCarritoById(productos);
agregarAlCarritoById(productos);
agregarAlCarritoById(productos);
alert('Abre la consola para ver tu compra')
imprimirCarrito (carrito);
console.log ('TOTAL: ', obtenerTotal(carrito));
//

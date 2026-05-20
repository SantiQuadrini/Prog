import { Injectable } from '@angular/core';
import { Productos } from '../paginas/productos/productos';
interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
  descripcion: string;
  imagen: string;
}
@Injectable({
  providedIn: 'root',
})

export class CarritoService {
  obtenerProductos(id: number): Productos | undefined {
    const prodObtenido = this.productos.find( producto => producto.id === id);
    return prodObtenido;
  }
  añadirProductos(){

  }
  editarCantidad(){

  }
  eliminarProducto(){

  }
}

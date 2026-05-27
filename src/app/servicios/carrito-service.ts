import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})

export class CarritoService {

  prodCarrito: Producto[] = [];

  agregarProd(p: Producto) {
    this.prodCarrito.push(p);
  }

  obtenerProducto() {
    return this.prodCarrito;
  }

  aumentarCantidad(id: number) {
    const productoCant = this.prodCarrito.find(p => p.id === id);
    if (productoCant) {
      productoCant.cantidad++;
    }
  }

  disminuirCantidad(id: number) {
    const productoCant = this.prodCarrito.find(p => p.id === id);
    if (productoCant) {
      productoCant.cantidad--;
    }
  }

  eliminarProducto(id: number): void {
    const eliminarProd = this.prodCarrito.findIndex(p => p.id === id);
    if (eliminarProd !== -1) {
      let confirma = confirm('¿Desea eliminar este producto del carrito?');
      if (confirma) {
        this.prodCarrito.splice(eliminarProd, 1);
        alert('Producto eliminado correctamente');
      }
      alert('Producto no eliminado');

    }
  }

  vaciarCarrito(): void {
    let confirma = confirm('¿Desea vaciar el carrito?');
    if (confirma) {
      this.prodCarrito = [];
      alert('Carrito vaciado correctamente');
    }
    alert('Carrito no vaciado');
  }

}

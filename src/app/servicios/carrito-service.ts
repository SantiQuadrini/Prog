import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})

export class CarritoService {

  prodCarrito: Producto[] = [];

  
  agregarProd(p: Producto) {
    const productoExistente = this.prodCarrito.find(prod => prod.id === p.id);
    
    if (productoExistente) {
      productoExistente.cantidad += p.cantidad;
    } else {
      this.prodCarrito.push(p);
    }
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

  disminuirCantidad(id: number){
    const productoCant = this.prodCarrito.find(p => p.id === id);
    if (productoCant) {
      productoCant.cantidad--;
      
      if (productoCant.cantidad <= 0) {
        this.eliminarProducto(id)
      }
    }
  }
  
contar(): number {
  return this.prodCarrito.length;
}

  eliminarProducto(id: number){
    const eliminarProd = this.prodCarrito.findIndex(p => p.id === id);
    
    if (eliminarProd !== -1) {
        let confirma = confirm('¿Desea eliminar este producto del carrito?');
        if(confirma){
          this.prodCarrito.splice(eliminarProd, 1);
          alert('Producto eliminado correctamente');
        }
        if (!confirma) {
          alert('Producto no eliminado');
          return;
        }
    }
  }

  vaciarCarrito(){
    let confirma = confirm('¿Desea vaciar el carrito?');
    if (confirma) {
      this.prodCarrito = [];
      alert('Carrito vaciado correctamente');
    } else {
      alert('Carrito no vaciado');
    }
  }
}

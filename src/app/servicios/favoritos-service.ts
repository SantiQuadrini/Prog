import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { CarritoService } from './carrito-service';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {

  prodFavoritos: Producto[] = [];

  constructor(private carritoService: CarritoService) {}

  agregarFavorito(p: Producto) {
    const productoExistente = this.prodFavoritos.find(prod => prod.id === p.id);

    if (productoExistente) {
      productoExistente.cantidad += p.cantidad;
    } else {
      this.prodFavoritos.push(p);
      alert('Producto agregado a favoritos');
    }
  }

  obtenerProducto() {
    return this.prodFavoritos;
  }

  contar(): number {
    return this.prodFavoritos.length;
  }

  eliminarProducto(id: number) {
    const eliminarProd = this.prodFavoritos.findIndex(p => p.id === id);

    if (eliminarProd !== -1) {
      let confirma = confirm('¿Desea eliminar este producto de favoritos?');
      if (confirma) {
        this.prodFavoritos.splice(eliminarProd, 1);
        alert('Producto eliminado correctamente');
      } else {
        alert('Producto no eliminado');
        return;
      }
    }
  }

  vaciarFavoritos() {
    let confirma = confirm('¿Desea vaciar los favoritos?');
    if (confirma) {
      this.prodFavoritos = [];
      alert('Favoritos vaciados correctamente');
    } else {
      alert('Favoritos no vaciados');
    }
  }

  obtenerTotal(): number {
    return this.prodFavoritos.reduce((total, producto) => {
      return total + (producto.precio * producto.cantidad);
    }, 0);
  }

  anadirCarro(p: Producto) {
    this.carritoService.agregarProd(p);
  }
}
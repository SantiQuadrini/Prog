import { Injectable } from '@angular/core';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private favoritos: Producto[] = [];

  obtenerFavoritos(): Producto[] {
    return this.favoritos;
  }

  agregarAFavoritos(producto: Producto): void {
    const existe = this.favoritos.some((item) => item.id === producto.id);
    if (!existe) {
      this.favoritos.push(producto);
    }
  }

  eliminarDeFavoritos(productoId: number): void {
    this.favoritos = this.favoritos.filter((item) => item.id !== productoId);
  }

  estaEnFavoritos(productoId: number): boolean {
    return this.favoritos.some((item) => item.id === productoId);
  }
}

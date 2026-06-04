import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CarritoService } from '../../servicios/carrito';
import { FavoritosService } from '../../servicios/favoritos';
import { Producto } from '../../models/productos';

@Component({
  selector: 'app-favoritos',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './favoritos.html',
  styleUrls: ['./favoritos.css'],
})
export class Favoritos {
  private favoritosService = inject(FavoritosService);
  private carritoService = inject(CarritoService);

  get favoritos(): Producto[] {
    return this.favoritosService.obtenerFavoritos();
  }

  eliminar(productoId: number): void {
    this.favoritosService.eliminarDeFavoritos(productoId);
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarAlCarrito(producto);
    alert(`Producto agregado al carrito: ${producto.nombre}`);
  }
}

import { Component, inject } from '@angular/core';
import { Producto } from '../../models/productos';
import { CarritoService } from '../../servicios/carrito';
import { FavoritosService } from '../../servicios/favoritos';
import { ProductosService } from '../../servicios/productos';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrls: ['./ofertas.css'],
})
export class Ofertas {
  private productosService = inject(ProductosService);
  private carritoService = inject(CarritoService);
  private favoritosService = inject(FavoritosService);

  ofertas: Producto[] = this.productosService.getOfertas();

  agregarCarrito(producto: Producto): void {
    console.log('Ofertas: agregarCarrito', producto);
    this.carritoService.agregarAlCarrito(producto);
    alert(`Agregado al carrito: ${producto.nombre}`);
  }

  agregarFavorito(producto: Producto): void {
    this.favoritosService.agregarAFavoritos(producto);
    alert(`Agregado a favoritos: ${producto.nombre}`);
  }
}

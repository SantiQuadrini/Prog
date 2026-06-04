import { Component, inject } from '@angular/core';
import { Producto } from '../../models/productos';
import { CarritoService } from '../../servicios/carrito';
import { FavoritosService } from '../../servicios/favoritos';
import { ProductosService } from '../../servicios/productos';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css'],
})
export class Productos {
  private productosService = inject(ProductosService);
  private carritoService = inject(CarritoService);
  private favoritosService = inject(FavoritosService);

  productos: Producto[] = this.productosService.getProductos();

  agregarCarrito(producto: Producto): void {
    console.log('Productos: agregarCarrito', producto);
    this.carritoService.agregarAlCarrito(producto);
    alert(`Agregado al carrito: ${producto.nombre}`);
  }

  agregarFavorito(producto: Producto): void {
    this.favoritosService.agregarAFavoritos(producto);
    alert(`Agregado a favoritos: ${producto.nombre}`);
  }
}


import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carrito-service';
@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
   constructor(
      private carritoService: CarritoService
    ) { }
  Productos: Producto[] = [
    { id: 1, nombre: 'Pizza Mozzarellla', precio: 15000, informacion: 'Mozzarella, tomate, albahaca', imagen: 'assets/muzarella.png', disponibilidad: false,cantidad:1 },
    { id: 2, nombre: 'Pizza Pepperoni', precio: 19990, informacion: 'Pepperoni, mozzarella, tomate', imagen: 'assets/peperonni.png', disponibilidad: false,cantidad:1 },
    { id: 3, nombre: 'Pizza Hawaiana', precio: 17800, informacion: 'Piña, jamón, mozzarella', imagen: 'assets/ChatGPT Image 6 may 2026, 11_04_18 a.m..png', disponibilidad: true,cantidad:1},
  ];
  agregarProducto(p: Producto) {
    this.carritoService.agregarProd(p);
  }
}

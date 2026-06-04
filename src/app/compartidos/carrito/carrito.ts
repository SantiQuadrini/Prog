import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarritoItem, CarritoService } from '../../servicios/carrito';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css'],
})
export class Carrito {
  private carritoService = inject(CarritoService);
  factura = '';

  get items(): CarritoItem[] {
    return this.carritoService.obtenerCarrito();
  }

  get total(): number {
    return this.carritoService.obtenerTotalPrecio();
  }

  get cantidadTotal(): number {
    return this.items.reduce((total, item) => total + item.cantidad, 0);
  }

  eliminar(productoId: number): void {
    this.carritoService.eliminarDelCarrito(productoId);
  }

  incrementar(productoId: number): void {
    this.carritoService.incrementarCantidad(productoId);
  }

  decrementar(productoId: number): void {
    this.carritoService.decrementarCantidad(productoId);
  }

  limpiar(): void {
    this.carritoService.limpiarCarrito();
    this.factura = '';
  }

  finalizarCompra(): void {
    if (!this.items.length) {
      this.factura = 'No hay productos en el carrito para finalizar la compra.';
      return;
    }

    this.factura = `Factura generada: ${this.cantidadTotal} producto(s) - Total $${this.total.toLocaleString()}. Gracias por tu compra.`;
  }
}

import { Injectable } from '@angular/core';
import { Producto } from '../models/productos';

export interface CarritoItem {
  producto: Producto;
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private readonly storageKey = 'carritoItems';
  private items: CarritoItem[] = [];

  constructor() {
    this.cargarDesdeStorage();
  }

  private guardarEnStorage(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    } catch {
      // Si no se puede guardar, no bloquea la app.
    }
  }

  private cargarDesdeStorage(): void {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        this.items = JSON.parse(saved) as CarritoItem[];
      }
    } catch {
      this.items = [];
    }
  }

  obtenerCarrito(): CarritoItem[] {
    return this.items;
  }

  agregarAlCarrito(producto: Producto, cantidad = 1): void {
    console.log('CarritoService agregarAlCarrito', producto);
    const item = this.items.find((registro) => registro.producto.id === producto.id);
    if (item) {
      item.cantidad += cantidad;
    } else {
      this.items.push({ producto, cantidad });
    }
    this.guardarEnStorage();
  }

  eliminarDelCarrito(productoId: number): void {
    this.items = this.items.filter((registro) => registro.producto.id !== productoId);
    this.guardarEnStorage();
  }

  limpiarCarrito(): void {
    this.items = [];
    this.guardarEnStorage();
  }

  obtenerTotalCantidad(): number {
    return this.items.reduce((total, registro) => total + registro.cantidad, 0);
  }

  obtenerTotalPrecio(): number {
    return this.items.reduce(
      (total, registro) => total + registro.producto.precio * registro.cantidad,
      0,
    );
  }

  incrementarCantidad(productoId: number): void {
    const item = this.items.find((registro) => registro.producto.id === productoId);
    if (item) {
      item.cantidad++;
      this.guardarEnStorage();
    }
  }

  decrementarCantidad(productoId: number): void {
    const item = this.items.find((registro) => registro.producto.id === productoId);
    if (item && item.cantidad > 1) {
      item.cantidad--;
      this.guardarEnStorage();
    }
  }
}

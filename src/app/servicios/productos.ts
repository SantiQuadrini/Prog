import { Injectable } from '@angular/core';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productos: Producto[] = [
    { id: 1, nombre: 'iPhone 8 Plus', descripcion: 'iPhone 8 Plus 64GB', precio: 185000, stock: 2, imagen: 'assets/iphone8plus.avif', categoria: 'celulares', disponibilidad: true },
    { id: 2, nombre: 'iPhone SE', descripcion: 'iPhone SE 2020', precio: 150000, stock: 8, imagen: 'assets/iphone8plus.avif', categoria: 'celulares', disponibilidad: true },
    { id: 3, nombre: 'iPhone 12', descripcion: 'iPhone 12 128GB', precio: 360000, stock: 3, imagen: 'assets/iphone12.webp', categoria: 'celulares', disponibilidad: true },
    { id: 4, nombre: 'iPhone 13 Rojo', descripcion: 'iPhone 13 color rojo', precio: 450000, stock: 5, imagen: 'assets/iphone13rojo.avif', categoria: 'celulares', disponibilidad: true },
    { id: 5, nombre: 'iPhone 13 Pro', descripcion: 'iPhone 13 Pro 256GB', precio: 680000, stock: 3, imagen: 'assets/iphone13pro.webp', categoria: 'celulares', disponibilidad: true },
    { id: 6, nombre: 'iPhone 13 Pro Max', descripcion: 'iPhone 13 Pro Max 512GB', precio: 820000, stock: 1, imagen: 'assets/iphone13promax.jpg', categoria: 'celulares', disponibilidad: true },
    { id: 7, nombre: 'iPhone 15', descripcion: 'iPhone 15 128GB', precio: 780000, stock: 2, imagen: 'assets/iphone15.png', categoria: 'celulares', disponibilidad: true },
    { id: 8, nombre: 'iPhone 15 Pro Max', descripcion: 'iPhone 15 Pro Max 256GB', precio: 1050000, stock: 4, imagen: 'assets/iphone15promax.webp', categoria: 'celulares', disponibilidad: true },
    { id: 9, nombre: 'iPhone 16', descripcion: 'iPhone 16 128GB', precio: 1090000, stock: 2, imagen: 'assets/iphone16.webp', categoria: 'celulares', disponibilidad: true },
    { id: 10, nombre: 'iPhone 16 Pro Max', descripcion: 'iPhone 16 Pro Max 512GB', precio: 1290000, stock: 2, imagen: 'assets/iphone16promax.webp', categoria: 'celulares', disponibilidad: true },
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  // Ejemplo simple de selección de ofertas por id fijo
  getOfertas(): Producto[] {
    const idsOfertas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return this.productos.filter((p) => idsOfertas.includes(p.id));
  }

  buscarPorCategoria(categoria: string): Producto[] {
    return this.productos.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase());
  }

  getProductoPorId(id: number): Producto | undefined {
    return this.productos.find((p) => p.id === id);
  }
}

import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carrito-service';
import { FormsModule } from '@angular/forms';
import { FavoritosService } from '../../servicios/favoritos-service';
@Component({
  selector: 'app-productos',
  imports: [FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
  standalone: true
})
export class Productos {
  constructor(
    private carritoService: CarritoService,
    private FavoritosService: FavoritosService
  ) { }
  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Pizza Pepperoni",
      disponibilidad: true,
      precio: 35000,
      imagen: "assets/peperonni.png",
      informacion: "Clásica pizza con abundante mozzarella y rodajas de pepperoni ligeramente picantes.",
      cantidad: 1

    },
    {
      id: 2,
      nombre: "Pizza Napolitana",
      disponibilidad: true,
      precio: 29900,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_01_17 a.m..png",
      informacion: "Preparada con salsa de tomate, mozzarella, rodajas de tomate fresco y orégano.",
      cantidad: 1

    },
    {
      id: 3,
      nombre: "Pizza Vegetariana",
      disponibilidad: true,
      precio: 28500,
      imagen: "assets/vegetariana (1).png",
      informacion: "Combinación de vegetales frescos, mozzarella y un toque de hierbas aromáticas.",
      cantidad: 1
    },
    {
      id: 4,
      nombre: "Pizza Muzarella",
      disponibilidad: true,
      precio: 23000,
      imagen: "assets/muzarella.png",
      informacion: "La tradicional pizza argentina con abundante queso mozzarella derretido.",
      cantidad: 1
    },
    {
      id: 5,
      nombre: "Pizza Fuggaza",
      disponibilidad: true,
      precio: 30000,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_02_44 a.m..png",
      informacion: "Cubierta con cebolla caramelizada, mozzarella y un toque de orégano.",
      cantidad: 1
    },
    {
      id: 6,
      nombre: "Pizza Provolone",
      disponibilidad: false,
      precio: 36900,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_05_10 a.m..png",
      informacion: "Pizza intensa y cremosa elaborada con queso provolone gratinado.",
      cantidad: 1
    },
    {
      id: 7,
      nombre: "Pizza Palmito",
      disponibilidad: true,
      precio: 34700,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_06_58 a.m..png",
      informacion: "Deliciosa combinación de mozzarella y tiernos palmitos sobre salsa de tomate.",
      cantidad: 1
    },
    {
      id: 8,
      nombre: "Pizza Champignon",
      disponibilidad: true,
      precio: 38000,
      imagen: "assets/ChatGPT Image 8 may 2026, 08_24_04 a.m..png",
      informacion: "Pizza con champiñones frescos, mozzarella y un suave toque de ajo y perejil.",
      cantidad: 1
    },
    {
      id: 9,
      nombre: "Pizza Anchoas",
      disponibilidad: true,
      precio: 35900,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_08_58 a.m..png",
      informacion: "Especialidad con anchoas saladas, mozzarella y un toque de aceite de oliva.",
      cantidad: 1
    },
    {
      id: 10,
      nombre: "Pizza Rucula c/Jamon Crudo",
      disponibilidad: false,
      precio: 42000,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_07_58 a.m..png",
      informacion: "Pizza gourmet con rúcula fresca, jamón crudo y queso parmesano rallado.",
      cantidad: 1
    },
    {
      id: 11,
      nombre: "Pizza Panceta Y Cebolla Caramelizada",
      disponibilidad: true,
      precio: 41000,
      imagen: "assets/ChatGPT Image 8 may 2026, 08_29_59 a.m..png",
      informacion: "Combinación irresistible de panceta crocante y cebolla caramelizada.",
      cantidad: 1
    },
    {
      id: 12,
      nombre: "Pizza Mexicana",
      disponibilidad: true,
      precio: 34600,
      imagen: "assets/ChatGPT Image 8 may 2026, 08_32_28 a.m..png",
      informacion: "Pizza picante con carne condimentada, jalapeños y mozzarella fundida.",
      cantidad: 1
    },
    {
      id: 13,
      nombre: "Pizza Pollo a la Barbacoa",
      disponibilidad: false,
      precio: 44700,
      imagen: "assets/ChatGPT Image 8 may 2026, 08_33_32 a.m..png",
      informacion: "Preparada con pollo tierno, salsa barbacoa y queso mozzarella gratinado.",
      cantidad: 1
    },
    {
      id: 14,
      nombre: "Pizza Hawaianas",
      disponibilidad: true,
      precio: 36400,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_04_18 a.m..png",
      informacion: "La mezcla perfecta de jamón, ananá y mozzarella derretida.",
      cantidad: 1
    },
    {
      id: 15,
      nombre: "Pizza Roquefort",
      disponibilidad: false,
      precio: 37000,
      imagen: "assets/ChatGPT Image 8 may 2026, 08_35_25 a.m..png",
      informacion: "Pizza de sabor intenso elaborada con queso roquefort y mozzarella.",
      cantidad: 1
    },
    {
      id: 16,
      nombre: "Empanada de Carne",
      disponibilidad: true,
      precio: 5000,
      imagen: "assets/ChatGPT Image 3 jun 2026, 10_21_24 a.m..png",
      informacion: "Empanada rellena de carne molida condimentada con especias.",
      cantidad: 1
    },
    {
      id: 17,
      nombre: "Empanada de Pollo",
      disponibilidad: true,
      precio: 5000,
      imagen: "assets/ChatGPT Image 3 jun 2026, 10_24_08 a.m..png",
      informacion: "Empanada rellena de pollo desmenuzado con salsa de crema.",
      cantidad: 1
    },
    {
      id: 18,
      nombre: "Empanada de Queso",
      disponibilidad: true,
      precio: 4500,
      imagen: "assets/ChatGPT Image 3 jun 2026, 10_27_17 a.m..png",
      informacion: "Empanada rellena de queso mozzarella fundido.",
      cantidad: 1
    },
    {
      id: 19,
      nombre: "Empanada de Jamón y Queso",
      disponibilidad: true,
      precio: 5500,
      imagen: "assets/ChatGPT Image 3 jun 2026, 10_29_00 a.m..png",
      informacion: "Empanada rellena de jamón y queso",
      cantidad: 1
    },
    {
      id: 20,
      nombre: "Empanada de Papa",
      disponibilidad: true,
      precio: 4000,
      imagen: "assets/ChatGPT Image 3 jun 2026, 10_31_47 a.m..png",
      informacion: "Empanada rellena de papa dorada con cebolla.",
      cantidad: 1
    },
    {
      id: 21,
      nombre: "Empanada de Hojaldre",
      disponibilidad: true,
      precio: 4500,
      imagen: "assets/ChatGPT Image 3 jun 2026, 10_34_21 a.m..png",
      informacion: "Empanada de hojaldre con relleno mixto.",
      cantidad: 1
    },
    {
      id: 22,
      nombre: "Empanada de Carne Picante",
      disponibilidad: true,
      precio: 5500,
      imagen: "assets/ChatGPT Image 3 jun 2026, 10_36_14 a.m..png",
      informacion: "Empanada rellena de carne con picante.",
      cantidad: 1
    },
    {
      id: 23,
      nombre: "Empanada de Verduras",
      disponibilidad: true,
      precio: 4500,
      imagen: "assets/ChatGPT Image 3 jun 2026, 10_37_42 a.m..png",
      informacion: "Empanada rellena de vegetales mixtos.",
      cantidad: 1
    },
    {
      id: 24,
      nombre: "Empanada de Atún",
      disponibilidad: true,
      precio: 5000,
      imagen: "assets/Gemini_Generated_Image_256a2t256a2t256a (1).png",
      informacion: "Empanada rellena de atún con tomate.",
      cantidad: 1
    },
    {
      id: 25,
      nombre: "Empanada de Capresse",
      disponibilidad: true,
      precio: 5000,
      imagen: "assets/Gemini_Generated_Image_3okdk53okdk53okd (1).png",
      informacion: "Empanada rellena de champiñones.",
      cantidad: 1
    },
    {
      id: 26,
      nombre: "Empanada de Humita",
      disponibilidad: true,
      precio: 5500,
      imagen: "assets/Gemini_Generated_Image_z4aa3yz4aa3yz4aa.png",
      informacion: "Empanada rellena de pollo y queso.",
      cantidad: 1
    },
    {
      id: 27,
      nombre: "Empanada de Carne y Queso",
      disponibilidad: true,
      precio: 6000,
      imagen: "assets/Gemini_Generated_Image_a6z41ra6z41ra6z4.png",
      informacion: "Empanada rellena de carne y queso derretido.",
      cantidad: 1
    },
    {
      id: 28,
      nombre: "Empanada de Cantimpalo",
      disponibilidad: true,
      precio: 6000,
      imagen: " assets/Gemini_Generated_Image_kam1k2kam1k2kam1.png",
      informacion: "Empanada rellena de carne y queso derretido.",
      cantidad: 1
    }
  ];
  searchTerm: string = '';

  filtrarProductos() {
    if (!this.searchTerm) {
      return this.Productos;
    }

    const filtered = this.Productos.filter(p =>
      p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    return filtered;
  }
  agregarProducto(p: Producto) {
    this.carritoService.agregarProd(p);
  }
   agregarFavorito(p: Producto) {
    this.FavoritosService.agregarFavorito(p);
  }
}


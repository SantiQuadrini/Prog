import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Pizza Pepperoni",
      disponibilidad: true,
      precio: 35000,
      imagen: "assets/peperonni.png",
      informacion: "Clásica pizza con abundante mozzarella y rodajas de pepperoni ligeramente picantes."
    },
    {
      id: 1,
      nombre: "Pizza Napolitana",
      disponibilidad: true,
      precio: 29900,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_01_17 a.m..png",
      informacion: "Preparada con salsa de tomate, mozzarella, rodajas de tomate fresco y orégano."
    },
    {
      id: 1,
      nombre: "Pizza Vegetariana",
      disponibilidad: true,
      precio: 28500,
      imagen: "assets/vegetariana (1).png",
      informacion: "Combinación de vegetales frescos, mozzarella y un toque de hierbas aromáticas."
    },
    {
      id: 1,
      nombre: "Pizza Muzarella",
      disponibilidad: true,
      precio: 23000,
      imagen: "assets/muzarella.png",
      informacion: "La tradicional pizza argentina con abundante queso mozzarella derretido."
    },
    {
      id: 1,
      nombre: "Pizza Fuggaza",
      disponibilidad: true,
      precio: 30000,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_02_44 a.m..png",
      informacion: "Cubierta con cebolla caramelizada, mozzarella y un toque de orégano."
    },
    {
      id: 1,
      nombre: "Pizza Provolone",
      disponibilidad: false,
      precio: 36900,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_05_10 a.m..png",
      informacion: "Pizza intensa y cremosa elaborada con queso provolone gratinado."
    },
    {
      id: 1,
      nombre: "Pizza Palmito",
      disponibilidad: true,
      precio: 34700,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_06_58 a.m..png",
      informacion: "Deliciosa combinación de mozzarella y tiernos palmitos sobre salsa de tomate."
    },
    {
      id: 1,
      nombre: "Pizza Champignon",
      disponibilidad: true,
      precio: 38000,
      imagen: "assets/ChatGPT Image 8 may 2026, 08_24_04 a.m..png",
      informacion: "Pizza con champiñones frescos, mozzarella y un suave toque de ajo y perejil."
    },
    {
      id: 1,
      nombre: "Pizza Anchoas",
      disponibilidad: true,
      precio: 35900,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_08_58 a.m..png",
      informacion: "Especialidad con anchoas saladas, mozzarella y un toque de aceite de oliva."
    },
    {
      id: 1,
      nombre: "Pizza Rucula c/Jamon Crudo",
      disponibilidad: false,
      precio: 42000,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_07_58 a.m..png",
      informacion: "Pizza gourmet con rúcula fresca, jamón crudo y queso parmesano rallado."
    },
    {
      id: 1,
      nombre: "Pizza Panceta Y Cebolla Caramelizada",
      disponibilidad: true,
      precio: 41000,
      imagen: "assets/ChatGPT Image 8 may 2026, 08_29_59 a.m..png",
      informacion: "Combinación irresistible de panceta crocante y cebolla caramelizada."
    },
    {
      id: 1,
      nombre: "Pizza Mexicana",
      disponibilidad: true,
      precio: 34600,
      imagen: "assets/ChatGPT Image 8 may 2026, 08_32_28 a.m..png",
      informacion: "Pizza picante con carne condimentada, jalapeños y mozzarella fundida."
    },
    {
      id: 1,
      nombre: "Pizza Pollo a la Barbacoa",
      disponibilidad: false,
      precio: 44700,
      imagen: "assets/ChatGPT Image 8 may 2026, 08_33_32 a.m..png",
      informacion: "Preparada con pollo tierno, salsa barbacoa y queso mozzarella gratinado."
    },
    {
      id: 1,
      nombre: "Pizza Hawaianas",
      disponibilidad: true,
      precio: 36400,
      imagen: "assets/ChatGPT Image 6 may 2026, 11_04_18 a.m..png",
      informacion: "La mezcla perfecta de jamón, ananá y mozzarella derretida."
    },
    {
      id: 1,
      nombre: "Pizza Roquefort",
      disponibilidad: false,
      precio: 37000,
      imagen: "assets/ChatGPT Image 8 may 2026, 08_35_25 a.m..png",
      informacion: "Pizza de sabor intenso elaborada con queso roquefort y mozzarella."
    }
  ]
}


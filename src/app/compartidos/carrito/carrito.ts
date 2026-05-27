import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carrito-service';
@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {
prodCarro: Producto[] = [];
constructor(
private carritoService: CarritoService
){}
ngOnInit(){
this.prodCarro =
this.carritoService.obtenerProducto();
}
aumentar(id: number){
this.carritoService.aumentarCantidad(id);
}
disminuir(id: number){
this.carritoService.disminuirCantidad(id);
}
eliminar(id: number){
this.carritoService.eliminarProducto(id);
this.prodCarro =
this.carritoService.obtenerProducto();
}
}
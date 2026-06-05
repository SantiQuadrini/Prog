import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { RouterLink } from '@angular/router';
import { FavoritosService } from '../../servicios/favoritos-service';

@Component({
  selector: 'app-favoritos',
  imports: [RouterLink],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {
  prodFavoritos: Producto[] = [];
  constructor(
    private favoritos: FavoritosService 
  ) { }
  ngOnInit() {
    this.prodFavoritos =
      this.favoritos.obtenerProducto();
  }
  eliminar(id: number) {
    this.favoritos.eliminarProducto(id);
    this.prodFavoritos =
      this.favoritos.obtenerProducto();
  }
  vaciarFavoritos() {
    this.favoritos.vaciarFavoritos();
    this.prodFavoritos =
      this.favoritos.obtenerProducto();
  }
  obtenerTotal(): number {
    return this.favoritos.obtenerTotal();
  }
  anadirCarro(p: Producto) {
    this.favoritos.anadirCarro(p);
  }
}

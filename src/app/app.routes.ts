import { Routes } from '@angular/router';
import { Inicio,  }from'./paginas/inicio/inicio';
import { Productos, }from'./paginas/productos/productos';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Contactos } from './paginas/contactos/contactos';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';

export const routes: Routes = [

{ path: '', redirectTo: 'inicio', pathMatch: 'full' },

{ path: 'inicio',       component: Inicio },
{ path: 'Productos',  component: Productos },
{ path: 'Ofertas',  component: Ofertas },
{ path: 'contactos',  component: Contactos},


{ path: 'Carrito',  component: Carrito },
{ path: 'Favoritos',  component: Favoritos },


{ path: 'InicioSesion',  component: InicioSesion },
{ path: 'Registro',  component: Registro},
{ path: '**', redirectTo: 'inicio' },
];
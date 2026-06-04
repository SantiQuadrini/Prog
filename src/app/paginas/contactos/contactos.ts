import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contactos',
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './contactos.html',
  styleUrls: ['./contactos.css'],
})
export class Contactos {
  private fb = inject(FormBuilder);

  contactoForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', Validators.required],
  });

  mensajeEnviado = '';

  enviarContacto(): void {
    if (this.contactoForm.invalid) {
      this.contactoForm.markAllAsTouched();
      return;
    }

    const { nombre, email, mensaje } = this.contactoForm.value;
    this.mensajeEnviado = `Gracias ${nombre}. Recibimos tu mensaje: '${mensaje}'. Te contactaremos a ${email}.`;
    this.contactoForm.reset();
  }
}

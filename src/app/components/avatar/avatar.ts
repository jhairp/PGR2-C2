import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
  
})
export class Avatar {
  colorfondo = signal<string>('#3498db');
  tamano = signal<number>(150);
  tieneLentes = signal<boolean>(false);
  tipoExpresion = signal<number>(1);

  nombreAvatar = signal<string>('JHAIR');
  rotacion = signal<number>(0);

  cambiarTamano(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamano.set(parseInt(input.value));
  }

  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorfondo.set(input.value);
  }

  toggleLentes() {
    this.tieneLentes.update(flag => !flag);
  }

  setExpresion(tipo: number) {
    this.tipoExpresion.set(tipo);
  }

  cambiarNombre(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nombreAvatar.set(input.value);
  }

  cambiarRotacion(event: Event){
    const input = event.target as HTMLInputElement;
    this.rotacion.set(parseInt(input.value));
  }
}

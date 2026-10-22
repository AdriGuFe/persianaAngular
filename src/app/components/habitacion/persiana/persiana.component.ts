import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css'
})
export class PersianaComponent {
  estaSubida = false;
  energiaDisponible = input<boolean>(false);
  estadoActualizado = output<boolean>();

  moverPersiana() {
    if (this.energiaDisponible()) {
      this.estaSubida = !this.estaSubida;
      this.estadoActualizado.emit(this.estaSubida);
    }
  }
}

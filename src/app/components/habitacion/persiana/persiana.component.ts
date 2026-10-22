import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css'
})
export class PersianaComponent {
  estadoPersiana = false;
  corrienteHab = input<boolean>(false);
  estadoCambiado = output<boolean>();

  subirBajarPersiana() {
    if (this.corrienteHab()) {
      this.estadoPersiana = !this.estadoPersiana;
      this.estadoCambiado.emit(this.estadoPersiana);
    }
  }
}

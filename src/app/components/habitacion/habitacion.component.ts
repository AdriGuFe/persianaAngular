import { Component, input, output } from '@angular/core';
import { PersianaComponent } from "./persiana/persiana.component";

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  energia = input<boolean>(false);
  cambioPersiana = output<boolean>();

  reenviarEstadoPersiana (abierta: boolean) {
    this.cambioPersiana.emit(abierta);
  }
}

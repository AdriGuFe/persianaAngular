import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitacionComponent } from "./components/habitacion/habitacion.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'persianaAngular';
  corrienteVivienda = false;
  corrienteHabitacion = false;
  estadoPersianaRecibido = false;

  onConectarDesconectar(event: Event) {
    this.corrienteVivienda = !this.corrienteVivienda;

    if (!this.corrienteVivienda) {
      this.corrienteHabitacion = false;
    }
  }

  onConectarDesconectarHab(event: Event) {

    if (this.corrienteVivienda) {
      this.corrienteHabitacion = !this.corrienteHabitacion;
    }
  }

  onEstadoPersiana(estado: boolean) {
    this.estadoPersianaRecibido = estado;
  }
}

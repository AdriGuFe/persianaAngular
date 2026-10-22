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
  titulo = 'Control de persianas';
  suministroCasa = false;
  suministroDormitorio = false;
  persianaAbiertaRecibida = false;

  alternarSuministroCasa(event: Event) {
    this.suministroCasa = !this.suministroCasa;

    if (!this.suministroCasa) {
      this.suministroDormitorio = false;
    }
  }

  alternarSuministroDormitorio(event: Event) {

    if (this.suministroCasa) {
      this.suministroDormitorio = !this.suministroDormitorio;
    }
  }

  recibirEstadoPersiana(abierta: boolean) {
    this.persianaAbiertaRecibida = abierta;
  }
}

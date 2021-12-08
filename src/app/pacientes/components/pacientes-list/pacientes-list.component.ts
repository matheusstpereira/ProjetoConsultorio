import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../models/paciente.model";
import {PacienteService} from "../../services/paciente.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {

  pacientes?: Paciente[];
  currentPaciente?: Paciente;
  currentIndex = -1;
  nome = '';

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.retrievePacientes();
  }

  refreshList(): void {
    this.currentPaciente = undefined;
    this.currentIndex = -1;
    this.retrievePacientes();
  }

  retrievePacientes(): void {
    this.pacienteService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.pacientes = data;
    });
  }

  setActivePaciente(paciente: Paciente, index: number): void {
    this.currentPaciente = paciente;
    this.currentIndex = index;
  }

  removeAllPacientes(): void {
    this.pacienteService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

}

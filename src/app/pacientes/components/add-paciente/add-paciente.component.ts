import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../models/paciente.model";
import {PacienteService} from "../../services/paciente.service";

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {

  paciente: Paciente = new Paciente();
  submitted = false;

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
  }

  savePaciente(): void {
    this.pacienteService.create(this.paciente).then(() => {
      console.log('Created new paciente succesfully !');
      this.submitted = true;
    })
  }

  newPaciente(): void {
    this.submitted = false;
    this.paciente = new Paciente();
  }

}

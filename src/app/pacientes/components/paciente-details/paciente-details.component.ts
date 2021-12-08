import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Paciente} from "../../models/paciente.model";
import {PacienteService} from "../../services/paciente.service";

@Component({
  selector: 'app-paciente-details',
  templateUrl: './paciente-details.component.html',
  styleUrls: ['./paciente-details.component.css']
})
export class PacienteDetailsComponent implements OnInit {

  @Input() paciente?: Paciente;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentPaciente: Paciente = {
    nome: '',
    cpf: '',
    tel: '',
    email: '',
    dataConsulta: '',
    published: false
  };
  message = '';

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentPaciente = { ...this.paciente };
  }

  updatePublished(status: boolean): void {
    if (this.currentPaciente.key) {
      this.pacienteService.update(this.currentPaciente.key, { published: status })
        .then(() => {
          this.currentPaciente.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

  updatePaciente(): void {
    const data = {
      nome: this.currentPaciente.nome,
      cpf: this.currentPaciente.cpf,
      tel: this.currentPaciente.tel,
      email: this.currentPaciente.email,
      dataConsulta: this.currentPaciente.dataConsulta
    };

    if (this.currentPaciente.key) {
      this.pacienteService.update(this.currentPaciente.key, data)
        .then(() => this.message = 'O paciente foi atualizado com sucesso !')
        .catch(err => console.log(err));
    }
  }

  deletePaciente(): void {
    if (this.currentPaciente.key) {
      this.pacienteService.delete(this.currentPaciente.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'O paciente foi atualizado com sucesso !';
        })
        .catch(err => console.log(err));
    }
  }

}

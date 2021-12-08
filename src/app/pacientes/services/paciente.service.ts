import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {Paciente} from "../models/paciente.model";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private dbPath = '/pacientes';

  pacientesRef: AngularFireList<Paciente>;

  constructor(private db: AngularFireDatabase) {
    this.pacientesRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Paciente> {
    return this.pacientesRef;
  }

  create(paciente: Paciente): any {
    return this.pacientesRef.push(paciente);
  }

  update(key: string, value: any): Promise<void> {
    return this.pacientesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.pacientesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.pacientesRef.remove();
  }

}

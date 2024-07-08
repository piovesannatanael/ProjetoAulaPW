import { Injectable } from '@angular/core';
import {Tarefa} from "../model/tarefa";
import {Status} from "../model/status";
import Dexie from "dexie";

@Injectable({
  providedIn: 'root'
})
export class TarefaService extends Dexie{

  tarefas: Dexie.Table<Tarefa, number>;

  constructor() {
    super('TarefaDB');
    this.version(1).stores({
      tarefas: '++id, titulo, dataInicio, dataConclusao, status, descricao, imagem'
    });
    this.tarefas = this.table('tarefas');
  }

  async adicionarTarefa(t: Tarefa): Promise<number>{
    return await this.tarefas.add(t);
  }

  async buscarTarefas(): Promise<Tarefa[]>{
    return await this.tarefas.toArray();
  }

  async removerTarefa(id:number) {
    return await this.tarefas.delete(id);
  }

  async atualizarTarefa(id:number, tarefa: Tarefa): Promise<number>{
    return await this.tarefas.update(id, tarefa);
  }


}

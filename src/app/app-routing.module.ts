import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./componentes/pagina-inicial/pagina-inicial.component";
import {VisualizarTarefasComponent} from "./componentes/visualizar-tarefas/visualizar-tarefas.component";
import {BarContainerComponent} from "./componentes/bar-container/bar-container.component";

const routes: Routes = [
  { path: "", redirectTo: "bar-container", pathMatch: "full" },
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "visualizar-tarefas", component: VisualizarTarefasComponent },
  { path: "bar-container", component: BarContainerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

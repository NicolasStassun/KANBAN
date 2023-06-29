import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { CategoriaComponent } from './categoria/categoria.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [

  { path: 'tarefas', component: TarefasComponent},
  { path: 'categoria', component: CategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

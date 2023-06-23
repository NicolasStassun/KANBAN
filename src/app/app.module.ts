import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { UserRepository } from 'src/repositories/user.repository';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from 'src/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserRepository,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

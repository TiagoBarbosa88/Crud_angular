import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCadastrarEditarRoutingModule } from './item-cadastrar-editar-routing.module';
import { ItemCadastrarEditarComponent } from './item-cadastrar-editar/item-cadastrar-editar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DiologoConfirmacaoModule } from 'src/app/_shared/diologo-confirmacao/diologo-confirmacao.module';



@NgModule({
  declarations: [ItemCadastrarEditarComponent],
  imports: [
    CommonModule,
    ItemCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    DiologoConfirmacaoModule,

    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class ItemCadastrarEditarModule {}

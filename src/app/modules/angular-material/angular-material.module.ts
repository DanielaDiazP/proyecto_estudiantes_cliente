import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule,
   MatChipsModule, 
   MatToolbarModule,
   MatTableModule, 
   MatButtonModule,
   MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatChipsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatChipsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: []
})
export class AngularMaterialModule { }

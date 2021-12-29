import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  exports:[MatInputModule,MatGridListModule,MatSelectModule,MatCardModule,MatMenuModule,MatButtonModule,MatSnackBarModule,MatFormFieldModule,MatDialogModule,MatIconModule,MatBadgeModule,MatTableModule],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }

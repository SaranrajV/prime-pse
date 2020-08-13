import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class IntroModule { }

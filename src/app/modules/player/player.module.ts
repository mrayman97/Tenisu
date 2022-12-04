import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { playerRoutingModule } from './player.routes';
import { FilterByNamePipe } from 'src/app/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlayerComponent,FilterByNamePipe
  ],
  imports: [
    CommonModule,
    playerRoutingModule,
    FormsModule,

  ]
})
export class PlayerModule { }

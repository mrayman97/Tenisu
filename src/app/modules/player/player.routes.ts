import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { PlayerComponent } from './player.component';


const routes: Routes = [
  {
    path: '', component: PlayerComponent,
  },
  {
    path: 'detail/:id', component: PlayerDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class playerRoutingModule {}

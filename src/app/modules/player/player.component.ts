import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})

export class PlayerComponent implements OnInit {
  players: any = [];
  searchText = '';

  constructor(private playerService: PlayerService,private router: Router) { }

  ngOnInit(): void {
    this.loadPlayers();
  }

  //get players data
  loadPlayers(){
    this.playerService.getPlayers().subscribe(
      (data:any) => {
        this.players = data.players;
        console.log("Players :", this.players)
      },
      (err) => console.log(err),
      () => {}
       )
  }
  getDetails(id:number){
    this.router.navigate(['detail', id]);
  }

}

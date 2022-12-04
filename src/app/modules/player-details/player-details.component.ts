import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { COUNTRIES } from 'src/assets/countries';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  players: any = [];
  player: any ={};
  playerid=0;

  constructor(private route: ActivatedRoute,private playerService: PlayerService) {
    //get the id of the player from the URL
    this.playerid = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPlayerById();
  }

  //
  getPlayerById(){
    this.playerService.getPlayers().subscribe(
      (data:any) => {
        this.players = data.players;
      },
      (err) => console.log(err),
      () => {
        this.player=this.players.find((x: any) => x.id == this.playerid);
      }
    )
  }

  getCountry(){
    var country:any =COUNTRIES.find((x: any) => x.code == this.player.country.code);
    return country.name;
  }
}

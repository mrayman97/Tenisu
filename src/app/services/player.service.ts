import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseUrl="https://data.latelier.co/training/tennis_stats/headtohead.json";

  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get(this.baseUrl);
  }
}

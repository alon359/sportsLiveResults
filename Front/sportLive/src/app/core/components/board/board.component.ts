import { Component, Input, OnInit } from '@angular/core';
import { log } from 'console';
import { Game } from '../../models/Game';
import { GameUpdateService } from '../../services/game-update.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  games: Game[] = []
  thereIsGames:boolean = false;
  constructor(private getUpdateService : GameUpdateService) {
  }


  ngOnInit(): void {
    this.getUpdateService.getUpdateSpainToday().subscribe(data => {
      if(data.length>0){this.thereIsGames = true}
      for(let i = 0;i<data.length;i++){
        this.games.push(data[i])
      }
    })
  }

}

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
  constructor(private getUpdateService : GameUpdateService) {
  }


  ngOnInit(): void {
    this.getUpdateService.getUpdateSpainToday().subscribe(data => {
      for(let i = 0;i<data.length;i++){
        this.games.push(data[i])
      }
      console.log(this.games)
    })
  }

}

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
  thereIsGames:boolean = true;
  wait:boolean = false;
  constructor(private getUpdateService : GameUpdateService) {
  }


  ngOnInit(): void {

    setTimeout(() => {
      this.wait = true
    },2000)

  }

  ngAfterViewInit(){
    this.getUpdateService.getUpdateSpainToday().subscribe(data => {
      console.log(data);

      if(data.length>0){this.thereIsGames = true}
      else{this.thereIsGames = false}
      for(let i = 0;i<data.length;i++){
        this.games.push(data[i])
      }
    })
  }


}

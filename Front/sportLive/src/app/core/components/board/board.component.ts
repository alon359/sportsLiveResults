import { Component, Input, OnInit } from '@angular/core';
import {Game} from '../../models/game'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

 game: Game[] =[
    {
    teamHome : 'Barcelona',
    teamAway : 'Real Madrid',
    inPlay:false
    }
  ]
  constructor() {

  }


  ngOnInit(): void {
  }

}

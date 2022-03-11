import { Component, OnInit } from '@angular/core';
import {BoardComponent} from '../components/board/board.component'
import { GameUpdateService } from '../services/game-update.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    data:any;
  constructor(private getUpdate: GameUpdateService) {
   }

  ngOnInit(): void {
  }

  doGalit(){
     this.data = this.getUpdate.getUpdateSpainToday().subscribe((update:any) =>{
        console.log(update);
      })
  }

}

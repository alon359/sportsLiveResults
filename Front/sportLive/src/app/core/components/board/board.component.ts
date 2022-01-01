import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  a = ['Liverpol', 'Real Madrid']
  b = ['Barcelona', 'Totenham']
  Team1 ='galit'
  Team2 ='smoking'

  constructor() { }
  ngOnInit(): void {
  }

}

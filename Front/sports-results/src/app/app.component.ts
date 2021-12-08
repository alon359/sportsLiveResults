import { Component } from '@angular/core';
import { PrintServiceService } from './services/print-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private printS: PrintServiceService){}

  title = 'sports-results';

  ngOnInit(): void{
    console.log(this.printS.GalitSex());
    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameUpdateService {


  constructor(private http:HttpClient) {

   }
   rootURL = '/api';

   getUpdate() {
    return this.http.get('/api/getData//getSpainToday')

    }


}


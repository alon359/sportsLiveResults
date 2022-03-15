import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameUpdateService {


  constructor(private http:HttpClient) {

   }
   rootURL = '/api';

   getUpdateSpainToday() {


    return this.http.get<Game[]>('/api/getData/getSpainToday')

    }


}


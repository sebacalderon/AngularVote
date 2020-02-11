import { Game } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];

  constructor( private http: HttpClient) { }

  getNominates() {
    console.log(this.games.length);
    if ( this.games.length > 0 ) {
      // Desde cache
      console.log('Desde cache');
      return of(this.games);
    } else {
      // Desde Internet
      console.log('Desde Internet');
      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
      .pipe(
        tap(
          games => this.games = games
        )
      );
    }
  }

  votarJuego(id: string) {
    return this.http.post(`${ environment.url }/api/goty/${ id }`, {})
    .pipe(
      catchError( err =>{
        return of (err.error);
      })
    );
  }
}

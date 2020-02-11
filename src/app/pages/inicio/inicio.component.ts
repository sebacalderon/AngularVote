import { Game } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor( private db: AngularFirestore) { }

  ngOnInit() {

    this.db.collection('goty').valueChanges()
    .pipe(
      map( (resp: Game[]) => {
        // return resp.map( ({ name, votos }) => ({name, value: votos}));
        return resp.map ( juego => {
          return {
            name: juego.name,
            votos: juego.votos
          };
        });
      })
    )
    .subscribe( juegos => {
      // console.log(juegos);
      this.juegos = juegos;
    } );

  }

}

import { Game } from './../../interfaces/interfaces';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getNominates()
    .subscribe( games => {
      console.log( games );
      this.games = games;
    });
  }

  votarJuego (juego: Game ) {
    console.log(juego);
    this.gameService.votarJuego(juego.id)
    .subscribe( (resp: any) => {
      if (resp.ok) {
        Swal.fire('Gracias', resp.mensaje, 'success');
      } else {

      }
    });
  }

}

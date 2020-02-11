import { Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.scss']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  results: any[]=[
    {
      "name": "Juego 1",
      "value": 8940000
    },
    {
      "name": "Juego 2",
      "value": 5000000
    },
    {
      "name": "Juego 3",
      "value": 7200000
    },
    {
      "name": "Juego 4",
      "value": 10000000
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  interval;

  constructor() {
    // console.log(Math.round(Math.random()*500));

    this.interval = setInterval(() => {
      // tslint:disable-next-line: forin

      console.log('tick');

      const newResults = [...this.results];

      // tslint:disable-next-line: forin
      for (let i in newResults) {
        newResults[i].value = Math.round( Math.random() * 500 )
      }

      this.results = [...newResults];
    }, 1500);


  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

}

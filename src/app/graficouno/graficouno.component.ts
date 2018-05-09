import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficouno',
  templateUrl: './graficouno.component.html',
  styleUrls: ['./graficouno.component.css']
})
export class GraficounoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  back() {
    window.history.back();
  }


}

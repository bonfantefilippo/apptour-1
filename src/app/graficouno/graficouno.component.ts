import {Component, OnInit} from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-graficouno',
  templateUrl: './graficouno.component.html',
  styleUrls: ['./graficouno.component.css']
})
export class GraficounoComponent implements OnInit {

  classe;

  constructor(public service: StorageService) {
    this.service.grafici.subscribe(res => {
      this.classe = this.service.changeClassGraphFirst().first;
    })
  }

  ngOnInit() {
    this.classe = this.service.changeClassGraphFirst().first;
  }

  back() {
    window.history.back();
  }


}

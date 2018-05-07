import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.css']
})
export class GraficiComponent implements OnInit {
  leanStato = false;
  digitalStato = false;
  constructor(public service: StorageService) {
    this.service.leanClick.subscribe(res => {
      this.leanStato = res.stato;
    });
    this.service.digitalClick.subscribe(res => {
      this.digitalStato = res.stato;
    });
  }

  ngOnInit() {
  }

}

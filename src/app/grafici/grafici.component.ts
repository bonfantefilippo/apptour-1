import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.css']
})
export class GraficiComponent implements OnInit {

  constructor(public service: StorageService) {
    this.service.leanClick.subscribe(res => {});
  }

  ngOnInit() {
  }


}

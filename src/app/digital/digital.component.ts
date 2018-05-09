import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {

  btnOttimizza1 = false;
  btnOttimizza2 = false;

  constructor(public service: StorageService) {

  }

  ngOnInit() {
  }

  onOttimizza1() {
    this.btnOttimizza1 = !this.btnOttimizza1;
  }

  onOttimizza2() {
    this.btnOttimizza2 = !this.btnOttimizza2;
  }

}

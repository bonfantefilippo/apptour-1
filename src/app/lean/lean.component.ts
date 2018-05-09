import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-lean',
  templateUrl: './lean.component.html',
  styleUrls: ['./lean.component.css']
})
export class LeanComponent implements OnInit {

  btnOttimizza1 = false;
  btnOttimizza2 = false;

  btn1 = 'active';

  constructor(public service: StorageService) {

  }

  ngOnInit() {
  }

  onOttimizza1() {
    this.btnOttimizza1 = !this.btnOttimizza1;
    this.service.onOttimizza1({stato: this.btnOttimizza1});
  }

  onOttimizza2() {
    this.btnOttimizza2 = !this.btnOttimizza2;
    this.service.onOttimizza2({stato: this.btnOttimizza2});
  }
}

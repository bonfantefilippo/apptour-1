import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  btnLeanState = false;
  btnDigitalState = false;

  constructor(public service: StorageService) {
    // this.service.leanClick.subscribe(res => {});
  }

  ngOnInit() {
  }

  onLean() {
    this.btnLeanState = !this.btnLeanState;
    this.service.onLean({stato: this.btnLeanState});
  }

  onDigital() {
    this.btnDigitalState = !this.btnDigitalState;
    this.service.onDigital({stato: this.btnDigitalState});
  }
  onLeanOver() {
    this.service.onMouseOver({curIndex: ObjectID.btnlean});
  }
  onDigitalOver() {
    this.service.onMouseOver({curIndex: ObjectID.btnDigital});
  }

}

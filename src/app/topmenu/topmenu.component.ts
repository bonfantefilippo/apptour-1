import {Component, OnInit} from '@angular/core';
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
    this.setClass();
    this.service.onLean({stato: this.btnLeanState});
  }

  onDigital() {
    this.btnDigitalState = !this.btnDigitalState;
    this.setClass();
    this.service.onDigital({stato: this.btnDigitalState});
  }

  onLeanOver() {
    this.service.onMouseOver({curIndex: ObjectID.btnlean});
  }

  onDigitalOver() {
    this.service.onMouseOver({curIndex: ObjectID.btnDigital});
  }

  getIndex() {
    const iLean = this.btnLeanState ? 0 : 1;
    const iDigital = this.btnLeanState ? 0 : 1;
    return iLean + iDigital * 2;
  }
  setClass() {
    const i = this.getIndex();
    const aGrafici1 = ['grafico', 'grafico1', 'grafico2', 'grafico3'];
    const aGrafici2 = ['grafico4', 'grafico5', 'grafico6', 'graficot'];
    this.service.changeClass({grafico1:aGrafici1[i], grafico2:aGrafici2[i]});
  }

}

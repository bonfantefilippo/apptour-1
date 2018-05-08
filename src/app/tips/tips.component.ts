import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  tip = '';
  constructor(public service: StorageService) {
    this.service.objectMouseOver.subscribe(res => {
      this.tip = 'current index:' + res.curIndex;
    });
  }
  ngOnInit() {
  }
  tipString() {
    return 'Tip: ' + this.tip + '';
  }

}

import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';

@Component({
  selector: 'app-lavorazione',
  templateUrl: './lavorazione.component.html',
  styleUrls: ['./lavorazione.component.css']
})
export class LavorazioneComponent implements OnInit {
  ObjectID = ObjectID;
  constructor(public service: StorageService) {
    /*this.service.viewChange.subscribe(res => {
      this.index = res.curIndex;
    });*/
  }

  ngOnInit() {
  }
  onDivClick(index) {
    this.service.onView({curIndex: index});
  }
  onDivMouseOver(index) {
    this.service.onMouseOver({curIndex: index});
  }
}


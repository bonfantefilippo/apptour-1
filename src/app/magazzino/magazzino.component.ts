import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {ObjectID} from '../object-id.enum';

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css']
})
export class MagazzinoComponent implements OnInit {
  ObjectID = ObjectID;
  classe = 'magazzino2';
  backGround = 'tradizionale'
constructor(public service: StorageService) {
  this.service.ottimizzazione1.subscribe(res => {
    console.dir(res.stato);
    if (res.stato) {
      this.classe = 'magazzino2';
      this.backGround = 'tradizionale';
    } else {
      this.classe = 'magazzino1';
      this.backGround = 'lean';
    }
  });
}

ngOnInit() {
}


onDivMouseOver(index) {
  this.service.onMouseOver({curIndex: index});
}
}

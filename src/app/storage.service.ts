import {EventEmitter, Injectable, Output} from '@angular/core';
import {ObjectID} from './object-id.enum';
const objMapping: ObjectID[] = [
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewMagazzino,
  ObjectID.viewPreparazione,
  ObjectID.viewLavorazione,
  ObjectID.viewFinitura,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
  ObjectID.viewPiantina,
];

@Injectable()
export class StorageService {
  /* index è l'indice dell'oggetto corrente caricato nella View*/
  index: ObjectID = ObjectID.viewPiantina;

  @Output() leanClick = new EventEmitter();
  @Output() digitalClick = new EventEmitter();
  @Output() objectMouseOver = new EventEmitter();
  @Output() viewChange = new EventEmitter();

  constructor() { }

  onLean(event) {
    this.leanClick.emit(event);
  }

  onDigital(event) {
    this.digitalClick.emit(event);

  }

  onMouseOver(event) {
    this.objectMouseOver.emit(event);
  }

  onView(event) {
    const curIndex: ObjectID = event.curIndex;
    this.index = objMapping[curIndex];
    console.log('query ' + curIndex + ' pointTo ' + this.index);
    this.viewChange.emit({curIndex: this.index});
  }
  curView() {
    return this.index;
  }
}

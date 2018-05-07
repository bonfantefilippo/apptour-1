import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable
export class StorageService {

  index: number

  @Output() leanClick = new EventEmitter();
  @Output() digitalClick = new EventEmitter();

  constructor() { }

  onLean(temp) {
    this.leanClick.emit(temp);
  }

  onDigital() {

  }

  onMouseOver() {

  }

  load() {

    return this.index;
  }
}

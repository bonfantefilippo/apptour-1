import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  buttonState: boolean = false;

  constructor(public service: StorageService) {
    // this.service.leanClick.subscribe(res => {});
  }

  ngOnInit() {
  }

  onLean() {
    this.buttonState = !this.buttonState;
    this.service.onLean({stato: this.buttonState});
  }

}

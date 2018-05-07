import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  index = 1;

  constructor(public service: StorageService) { }

  ngOnInit() {
  }

  curIndex(temp): boolean {

    if (temp === this.service.load())
      return true;
    return false;
  }

}

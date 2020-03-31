import { Component, OnInit } from '@angular/core';
import { animations } from './animations';

@Component({
  selector: 'app-notlazycomp',
  templateUrl: './notlazycomp.component.html',
  styleUrls: ['./notlazycomp.component.scss'],
  animations,
})
export class NotLazycompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

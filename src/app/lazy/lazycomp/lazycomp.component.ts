import { Component, OnInit } from '@angular/core';
import { animations } from './animations';

@Component({
  selector: 'app-lazycomp',
  templateUrl: './lazycomp.component.html',
  styleUrls: ['./lazycomp.component.scss'],
  animations,
})
export class LazycompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

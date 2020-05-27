import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { CellType } from '../../interfaces/public-api';

@Component({
  selector: 'app-board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.scss'],
  animations: [
    trigger('enterLeaveTrigger', [
      transition(':enter', [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))]),
      transition(':leave', [animate('1s', style({ opacity: 0 }))])
    ])
  ]
})
export class BoardCellComponent implements OnInit {
  @Input()
  cellType: CellType = CellType.empty;

  cellClass: any;

  constructor() {}

  ngOnInit() {
    this.cellClass = {
      'app-game-cell__empty': this.cellType === CellType.empty,
      'app-game-cell__snake': this.cellType === CellType.snake,
      'app-game-cell__food': this.cellType === CellType.food
    };
  }
}

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { CellType, BoardSize, BoardState } from '../../interfaces/public-api';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  animations: [
    trigger('enterLeaveTrigger', [
      transition(':enter', [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))]),
      transition(':leave', [animate('1s', style({ opacity: 0 }))])
    ])
  ]
})
export class GameBoardComponent implements OnInit {
  @Input()
  boardSize: BoardSize = BoardSize.medium;

  boardSize$: Observable<number>;

  constructor(private store: Store<{ board: BoardState }>, private stateService: StateService) {}

  ngOnInit() {
    this.boardSize$ = this.stateService.getBoardSize();
  }

  // TODO: delete
  getRandomCellType(): CellType {
    const randomNumber = Math.round(Math.random() * 2);
    const cellTypes = Object.values(CellType);
    return cellTypes[randomNumber];
  }
}

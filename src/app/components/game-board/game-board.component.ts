import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { MainService } from '../../services/main.service';
import { CellType, BoardSize } from '../../interfaces/public-api';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  animations: [
    trigger('enterLeaveTrigger', [
      transition(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('1s', style({ opacity: 1 }))
        ]
      ),
      transition(
        ':leave',
        [
          animate('1s', style({ opacity: 0 }))
        ]
      )
    ])
  ]
})
export class GameBoardComponent {
  @Input()
  boardSize: BoardSize = BoardSize.medium;

  constructor() {}

  // TODO: delete
  getRandomCellType(): CellType {
    const randomNumber = Math.round(Math.random() * 2);
    const cellTypes = Object.values(CellType);
    return cellTypes[randomNumber];
  }

}

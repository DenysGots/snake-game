import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { MainService } from '../../services/main.service';

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
  constructor() {}
}

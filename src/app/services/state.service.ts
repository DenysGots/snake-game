import { select, Store } from '@ngrx/store';

import { Injectable } from '@angular/core';

import { BoardState } from '../interfaces/public-api';
import { STATE_ACTIONS } from '../actions/board-actions';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(private store: Store<{ board: BoardState }>) {}

  resetState() {
    this.store.dispatch({
      type: STATE_ACTIONS.RESET_STATE
    });
  }

  getBoardSize() {
    return this.store.pipe(
      select((state: { board: BoardState }) => state.board.board.size)
    );
  }
}

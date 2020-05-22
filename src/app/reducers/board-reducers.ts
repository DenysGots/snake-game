import { BoardState, initialState as _initialState } from '../interfaces/public-api';
import { STATE_ACTIONS } from '../actions/board-actions';

export function boardReducer(state: BoardState = _initialState, action: any) {
  switch (action.type) {
    case STATE_ACTIONS.RESET_STATE:
      return _initialState;
    case STATE_ACTIONS.UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

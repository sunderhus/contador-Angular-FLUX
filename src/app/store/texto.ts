import { on, createAction, props, createReducer } from '@ngrx/store';

export enum ActionTypes {
  ChangeMsg = 'ChangeMessenger',
  ClearMsg = 'ClearMessenger',
}

export const changeMessenger = createAction(
  ActionTypes.ChangeMsg,
  props<{ payload: string }>(),
);
export const clearMessenger = createAction(ActionTypes.ClearMsg);

const INITIAL_STATE = {
  mensagem: 'Olá digite uma mensagem para aparecer aqui.',
};

export const textoReducer = createReducer(
  INITIAL_STATE,
  on(changeMessenger, (state, action) => ({
    ...state,
    mensagem: `${action.payload}`,
  })),
  on(clearMessenger, state => ({
    ...state,
    mensagem: INITIAL_STATE.mensagem,
  })),
);

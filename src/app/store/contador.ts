import { on, createAction, props, createReducer } from "@ngrx/store";

export enum ActionTypes {
    Increment = 'Increment',
    Decrement = 'Decrement',
    Reset ='Reset',
    ChangeMsg = 'ChangeMessenger',
    ClearMsg = 'ClearMessenger',
};

export const decrement = createAction(
    ActionTypes.Decrement
)

export const increment = createAction(
    ActionTypes.Increment
)

export const resetCounter = createAction(
    ActionTypes.Reset
)

export const changeMessenger = createAction(
    ActionTypes.ChangeMsg,
    props<{payload:string}>()
)
export const clearMessenger = createAction(
    ActionTypes.ClearMsg
)

const INITIAL_STATE = {
    counter: 0,
    mensagem: 'Olá digite uma mensagem para aparecer aqui.'
}



export const contadorReducer = createReducer(
    INITIAL_STATE,
    on(increment, state =>({
        ...state,
        counter: state.counter + 1
    })),
    on(decrement, (state)=> ({
        ...state,
        counter: state.counter - 1
    })),
    on(resetCounter, (state)=>({
        ...state,
        counter: INITIAL_STATE.counter
    })),
    on(changeMessenger, (state, action)=>({
        ...state,
        mensagem: `${action.payload}`  
    })),
    on(clearMessenger, (state)=>({
        ...state,
        mensagem: INITIAL_STATE.mensagem  
    }))
)


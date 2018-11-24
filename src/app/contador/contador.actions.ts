import { Action } from '@ngrx/store';


/**
 * Implementacion de tal forma que indique que acciones se pueden realizar
 * Restringir que acciones puede rebir el reducer
*/

export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESET = '[Contador] Reset';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR;
    constructor(public payload: number) { }
}
export class DividirAction implements Action {
    readonly type = DIVIDIR;
    constructor(public payload: number) { }
}

export class ResetAction implements Action {
    readonly type = RESET;
}

export type actions = IncrementarAction |
    DecrementarAction |
    MultiplicarAction |
    DividirAction |
    ResetAction;

import { Action } from "@ngrx/store";


/**
 * Implementacion de tal forma que indique que acciones se pueden realizar
 * Restringir que acciones puede rebir el reducer
*/

export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
}

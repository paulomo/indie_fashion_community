import { Action } from "redux";

export interface AppActions<T = string, P = any> extends Action {
    type: T;
    payload: P;
}
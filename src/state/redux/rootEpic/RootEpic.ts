import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Action } from 'redux';
import { AppState } from "../../appState/AppState";
import { signUpEpic } from "../../../views/auth/signUp/state/epics/signUpEpics";

export const rootEpic = combineEpics(
    signUpEpic
);

export default createEpicMiddleware<Action, Action, AppState>();

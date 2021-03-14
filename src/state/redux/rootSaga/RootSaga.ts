import { all } from "redux-saga/effects";
import { AuthWatchers } from "../../../views/auth";

export function* rootSaga () {
    yield all([...AuthWatchers, ])
}
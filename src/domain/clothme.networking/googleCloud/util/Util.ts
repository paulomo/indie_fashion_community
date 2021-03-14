import Backend from "../config/Config";

const firebase = new Backend();

export const authService = firebase.auth()
export const dbService = firebase.database();
export const storage = firebase.storage();


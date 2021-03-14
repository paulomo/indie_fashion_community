import * as firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';


export default class Backend {
    constructor() {
        firebase.initializeApp({
            apiKey: process.env.REACT_APP_APIKEY,
            authDomain: process.env.REACT_APP_AUTHDOMAIN,
            databaseURL: process.env.REACT_APP_DATABASEURL,
            projectId: process.env.REACT_APP_PROJECTID,
            storageBucket: process.env.REACT_APP_STORAGEBUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
            appId: process.env.REACT_APP_APPID,
            measurementId: process.env.REACT_APP_MEASUREMENTID
        });
        
        // Some Setting...
        firebase.firestore().settings({});

        // Initialize Firebase
        firebase.analytics();

    }

    auth() {
        return firebase.auth()
    }

    database() {
        return firebase.firestore()
    }

    storage() {
        return firebase.storage()
    }

}

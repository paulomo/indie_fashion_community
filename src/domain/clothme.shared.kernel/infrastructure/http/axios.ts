import axios, { AxiosInstance } from "axios";
import { apiConfig } from "./API.Config"


export class Axios {
    public api: AxiosInstance;

    public constructor() {
        this.api = axios.create({ ...apiConfig });
    }
}
import { AxiosRequestConfig } from "axios";


export type AxiosOptions = AxiosRequestConfig & {
    rawResponse?: boolean
}
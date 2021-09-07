import axios, { AxiosRequestConfig } from "axios";
import { AxiosOptions } from "config/@types/HttpRequest";
import { getErrorMessageByCode } from "config/messages";
import ErrorHandler from "../ErrorHandler";


export default class HttpRequest {


    static async get(URL: string, options?: AxiosOptions) {
        try {
            let response = await axios.get(URL, options)
            if (options?.rawResponse) return response
            return response.data
        } catch (error: any) {
            const errorHandler = new ErrorHandler({
                status: error.response?.status,
                message: error.response?.data?.message,
                details: error.response?.data?.details || getErrorMessageByCode(error.response?.status)
            })
            throw errorHandler.format()
        }

    }
    static async post(URL: string, body: any = {}, options: AxiosRequestConfig = {}) {
        try {
            const response = await axios.post(URL, body, options)
            return response.data
        } catch (error: any) {
            const errorHandler = new ErrorHandler({
                status: error.response?.status,
                message: error.response?.data?.message,
                details: error.response?.data?.details || error.details || getErrorMessageByCode(error.response?.status)
            })
            throw errorHandler.format()
        }
    }
    static async form(URL: string, data: FormData = new FormData(), options: AxiosRequestConfig = {}) {
        try {
            const response = await axios.post(URL, data, { headers: { 'Content-Type': 'multipart/form-data' } })
            return response.data
        } catch (error: any) {
            const errorHandler = new ErrorHandler({
                status: error.response?.status,
                message: error.response?.data?.message,
                details: error.response?.data?.details || error.details || getErrorMessageByCode(error.response?.status)
            })
            throw errorHandler.format()
        }
    }
    static async put(URL: string, body: any = {}, options: AxiosRequestConfig = {}) {
        try {
            const response = await axios.put(URL, body, options)
            return response.data
        } catch (error: any) {
            const errorHandler = new ErrorHandler({
                status: error.response?.status,
                message: error.response?.data?.message,
                details: error.response?.data?.details || getErrorMessageByCode(error.response?.status)
            })
            throw errorHandler.format()
        }
    }
    static async patch(URL: string, body: any = {}, options: AxiosRequestConfig = {}) {
        try {
            const response = await axios.patch(URL, body, options)
            return response.data
        } catch (error: any) {
            const errorHandler = new ErrorHandler({
                status: error.response?.status,
                message: error.response?.data?.message,
                details: error.response?.data?.details || getErrorMessageByCode(error.response?.status)
            })
            throw errorHandler.format()
        }
    }

    static async delete(URL: string, options?: AxiosOptions) {
        try {
            let response = await axios.delete(URL, options)
            return response.data
        } catch (error: any) {
            const errorHandler = new ErrorHandler({
                status: error.response?.status,
                message: error.response?.data?.message,
                details: error.response?.data?.details || getErrorMessageByCode(error.response?.status)
            })
            throw errorHandler.format()
        }

    }

}
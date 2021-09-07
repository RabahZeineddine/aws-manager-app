import { getErrorMessageByCode } from "../../config/messages"


export type ErrorType = {
    status: number
    message?: string
    details: string
}


export default class ErrorHandler {


    private status: number = 500
    private message: string = ''
    private details: string = ''

    constructor(error: ErrorType) {
        this.setError(error)
    }

    setError(error: ErrorType) {
        this.status = error.status || 500
        this.details = error.details || getErrorMessageByCode(error.status)
        this.message = error.message || ''
    }

    format(): ErrorType {
        return {
            status: this.status,
            message: this.message,
            details: this.details
        }
    }

}
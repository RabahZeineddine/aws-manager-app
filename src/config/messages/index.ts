import { MessagesType, ObjectType } from "../@types"


const MESSAGES: MessagesType = {
    REQUIRED: 'Campo obrigatório',
    INVALID: 'Valor inválido',
    INVALID_CREDENTIALS: 'Credenciais inválidas',
    DEFAULT: 'Um erro ocorreu, tente novamente.',
}

const ERRORS: ObjectType = {
    401: MESSAGES.INVALID_CREDENTIALS,
    DEFAULT: MESSAGES.DEFAULT
}

export const getErrorMessage = (messageKey: string = '') => {
    return MESSAGES[messageKey] || MESSAGES.DEFAULT
}

export const getErrorMessageByCode = (code: number) => {
    return ERRORS[code] || ERRORS.DEFAULT
}


export default MESSAGES
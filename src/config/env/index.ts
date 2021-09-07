import { EnvVariables, NodeEnvInterface } from "config/@types/env"


const NODE_ENV: NodeEnvInterface = process.env.REACT_APP_ENV as NodeEnvInterface || process.env.NODE_ENV as NodeEnvInterface || 'development'


const env: EnvVariables = {
    API: process.env.REACT_APP_API_URL || '',
    NODE_ENV
}

export default env


export type NodeEnvInterface = 'local' | 'development' | 'quality_assurance' | 'production'


export type EnvVariables = {
    API: string
    NODE_ENV?: string
}

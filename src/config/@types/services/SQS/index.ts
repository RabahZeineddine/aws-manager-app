

export interface SQSQueue {
    QueueUrl: string
    name: string
}

export interface SQSQueueAttributes {
    [key: string]: any
}

export interface SQSQueueAttributesArgs {
    queueName: string
}
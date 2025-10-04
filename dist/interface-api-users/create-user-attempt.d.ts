export interface CreateUserAttemptRequest {
    phoneNumber: string;
    password: string;
}
export interface CreateUserAttemptGetResponse {
    id: number;
    phoneNumber: string;
    password: string;
    ip: string;
    createdAt: Date;
}
export interface CreateUserAttemptResponse {
    id: number;
    phoneNumber: string;
    ip: string;
    createdAt: Date;
    smsStatus: string;
}
export interface CreateUserAttemptError {
    error: string;
}

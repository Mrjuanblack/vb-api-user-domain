export interface EmailUpdateStartRequest {
    userId: number;
    newEmail: string;
}
export interface EmailUpdateStartResponse {
    userId: number;
    email: string;
    validUntil: Date;
    codesSentCount: number;
    emailStatus: 'pending' | 'sent' | 'failed';
    emailError?: string;
}
export interface EmailUpdateVerifyRequest {
    userId: number;
    code: string;
}
export interface EmailUpdateVerifyResponse {
    message: string;
    user: {
        id: number;
        phone: string | null;
        name: string | null;
        lastName: string | null;
        email: string | null;
        updatedAt: Date | null;
    };
}
export interface EmailUpdateError {
    error: string;
}
export interface EmailVerificationUpdateSelect {
    id: number;
    userId: number;
    email: string;
    code: string;
    verified: boolean;
    validUntil: Date;
    codesSentCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface EmailVerificationUpdateInsert {
    userId: number;
    email: string;
    code: string;
    verified?: boolean;
    validUntil: Date;
    codesSentCount?: number;
}

export interface SendEmailCodeRequest {
    userId: number;
}
export interface SendEmailCodeResponse {
    success: true;
    message: string;
    expiresAt: string;
    codesSentToday: number;
}
export interface VerifyEmailCodeRequest {
    userId: number;
    code: string;
}
export interface VerifyEmailCodeResponse {
    success: true;
    message: string;
    verified: boolean;
}
export interface EmailVerificationError {
    error: string;
}

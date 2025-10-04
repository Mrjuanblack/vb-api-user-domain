export interface SendCodeRequest {
    ipId: number;
}
export interface SendCodeResponse {
    success: true;
    message: string;
    expiresAt: string;
    codesSentToday: number;
}
export interface VerifyCodeRequest {
    ipId: number;
    code: string;
}
export interface VerifyCodeResponse {
    success: true;
    message: string;
    verified: boolean;
}
export interface PhoneVerificationError {
    error: string;
}

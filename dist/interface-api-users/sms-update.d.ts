export interface SendSMSUpdateRequest {
    userId: number;
    phoneNumber: string;
    code: string;
}
export interface SendSMSUpdateResponse {
    success: boolean;
    message: string;
    expiresAt: string;
    codesSentToday: number;
}
export interface SMSUpdateError {
    error: string;
}

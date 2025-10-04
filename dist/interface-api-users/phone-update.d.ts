export interface PhoneUpdateStartRequest {
    userId: number;
    newPhoneNumber: string;
}
export interface PhoneUpdateStartResponse {
    userId: number;
    phoneNumber: string;
    validUntil: Date;
    codesSentCount: number;
    smsStatus: 'pending' | 'sent' | 'failed';
}
export interface PhoneUpdateVerifyRequest {
    userId: number;
    code: string;
}
export interface PhoneUpdateVerifyResponse {
    userId: number;
    phoneNumber: string;
    verified: boolean;
    message: string;
}
export interface PhoneUpdateConfirmRequest {
    userId: number;
}
export interface PhoneUpdateConfirmResponse {
    message: string;
    user: {
        id: number;
        phone: string;
        name: string | null;
        lastName: string | null;
        email: string | null;
        updatedAt: Date | null;
    };
}
export interface PhoneUpdateError {
    error: string;
}
export interface PhoneVerificationUpdateSelect {
    id: number;
    userId: number;
    phoneNumber: string;
    code: string;
    verified: boolean;
    validUntil: Date;
    codesSentCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface PhoneVerificationUpdateInsert {
    userId: number;
    phoneNumber: string;
    code: string;
    verified?: boolean;
    validUntil: Date;
    codesSentCount?: number;
}

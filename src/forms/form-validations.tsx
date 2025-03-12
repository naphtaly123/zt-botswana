export function validateInput(value: string, minLength: number = 1): boolean {
    return value.length >= minLength;
}

export function validateEmail(email: string): boolean {
    const emailRegex: RegExp = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
    // Regex to validate phone numbers, supports international phone numbers with optional country code
    const phoneRegex: RegExp = /^\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phoneRegex.test(phone);
}
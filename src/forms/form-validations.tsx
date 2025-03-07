export function validateInput(value: string, minLength: number = 1): boolean {
    return value.length >= minLength;
}

export function validateEmail(email: string): boolean {
    const emailRegex: RegExp = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}
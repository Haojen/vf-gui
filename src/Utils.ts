export function log(message?: string, ...optionalParams: any[]): void {
    if (!optionalParams) {
        console.log(message);
    } else {
        console.log(message, optionalParams);
    }

}
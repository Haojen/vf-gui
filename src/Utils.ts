export function log(message?: any, ...optionalParams: any[]) {
    if (!optionalParams) {
        console.log(message);
    } else {
        console.log(message, optionalParams);
    }

}
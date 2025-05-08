export function processValue(value: string | number): number {
    if (value === null || value === undefined || value === "") {
        throw new Error("Input value is empty");
    }
    return typeof value === 'string' ? value.length : value * 2;
}
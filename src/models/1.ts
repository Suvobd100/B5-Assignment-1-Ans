
type formatString =
    (input: string, toUpper?: boolean) => string;


export function formatString(input: string, toUpper?: boolean): string {
    if (typeof input !== 'string') {
        throw new Error(`Please Provide String input, Not this: ${input}`)
    }
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }

}
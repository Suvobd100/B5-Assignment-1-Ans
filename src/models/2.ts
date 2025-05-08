

export function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

    if (!Array.isArray(items)) {
        throw new TypeError("Input must be an array of objects");
    }
    
    if (items.length === 0) {
        throw new Error("The input array is empty.");
    }
    return items.filter(item => item.rating >= 4);
}
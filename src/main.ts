{
    // 1-
    type formatString =
        (input: string, toUpper?: boolean) => string;


    function formatString(input: string, toUpper?: boolean): string {
        if (typeof input !== 'string') {
            throw new Error(`Please Provide String input, Not this: ${input}`)
        }
        if (toUpper === false) {
            return input.toLowerCase();
        } else {
            return input.toUpperCase();
        }

    }
    //
}

{
    // 2-

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

        if (!Array.isArray(items)) {
            throw new TypeError("Input must be an array of objects");
        }

        if (items.length === 0) {
            throw new Error("The input array is empty.");
        }
        return items.filter(item => item.rating >= 4);
    }
    // 
}

{
    // 3-

    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.flat()
    }
    // 
}

{
    // 4 -

    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year
        }
        getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year)
            this.model = model
        }
        getModel(): string {
            return `Model: ${this.model}`
        }

    }
    // 
}

{
    // 5-
    function processValue(value: string | number): number {
        if (value === null || value === undefined || value === "") {
            throw new Error("Input value is empty");
        }
        return typeof value === 'string' ? value.length : value * 2;
    }
    // 
}

{
    // 6-
    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        // product array is empty 
        if (products.length === 0) {
            return null
        }
        //    checking products price 
        let mostExpensive = products[0];

        for (const product of products) {
            if (product.price > mostExpensive.price) {
                mostExpensive = product;
            }
        }

        return mostExpensive;
    }
    //
}

{
    // 7-
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): "Weekday" | "Weekend" {
        switch (day) {
            case Day.Saturday:
            case Day.Sunday:
                return "Weekend";
            default:
                return "Weekday";
        }
    }

    //
}

{
    // 8---
    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"));
                } else {
                    resolve(n * n);
                }
            }, 1000);
        });
    }
    //
}
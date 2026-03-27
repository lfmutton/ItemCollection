import { randomUUID } from "crypto";


class Book {
    public constructor(
        public readonly name: string, 
        public readonly userId: string, 
        public readonly id: string = randomUUID()
    ) {}
}

export { Book }
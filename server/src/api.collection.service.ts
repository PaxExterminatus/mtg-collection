import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiCollectionService {
    private readonly collection = ['hi','how','a','you'];

    all() {
        return this.collection;
    }

    add(item: string) {
        this.collection.unshift(item);
    }
}

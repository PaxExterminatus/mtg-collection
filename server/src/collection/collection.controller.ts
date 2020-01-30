import { Controller, Body, Get, Post } from '@nestjs/common';
import { CollectionService } from "./collection.service";

@Controller('api/collection')
class CollectionController {
    constructor(private readonly service: CollectionService) {}

    @Get()
    async collection() {
        return this.service.all();
    }

    @Post()
    async add(@Body() item: string) {
        //return this.service.add(item);
    }
}

export {
    CollectionController
}

export default CollectionController
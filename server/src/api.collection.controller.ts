import { Controller, Body, Get, Post } from '@nestjs/common';
import { ApiCollectionService } from "./api.collection.service";

@Controller('api/collection')
export class ApiCollectionController {
    constructor(private readonly service: ApiCollectionService) {}

    @Get()
    async collection(): Promise<string[]> {
        return this.service.all();
    }

    @Post()
    async add(@Body() item: string) {
        return this.service.add(item);
    }
}
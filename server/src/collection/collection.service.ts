import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CollectionEntity } from './'

@Injectable()
class CollectionService {
    constructor(
        @InjectRepository(CollectionEntity) private readonly repository: Repository<CollectionEntity>
    ) {}

    all() {
        return this.repository.find();
    }
}

export {
    CollectionService
}

export default CollectionService
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CollectionController } from './collection/collection.controller'

import { Connection } from 'typeorm'
import { CollectionEntity, CollectionModule } from './collection'

import { join } from 'path'

const rootPath = join(__dirname, '..', 'public');
const database = join(__dirname, '..', 'db', 'db.db');

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath
        }),
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database,
            entities: [CollectionEntity]
        }),
        CollectionModule,
    ],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Connection } from 'typeorm'
import { CollectionEntity, CollectionModule } from './collection'

import { join } from 'path'

const rootPath = join(__dirname, '..', '..', 'electron', 'render');
const database = join(__dirname, '..', '..', 'electron', 'data', 'database.db');

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
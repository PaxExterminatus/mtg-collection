import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApiCollectionController } from './api.collection.controller'
import { ApiCollectionService } from './api.collection.service'
import { join } from 'path'
import { Connection } from 'typeorm'

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public')
        }),
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: join(__dirname, '..', 'db.db')
        }),
    ],
    controllers: [ApiCollectionController],
    providers: [ApiCollectionService]
})
export class AppModule {
    constructor(private readonly connection: Connection) {
        console.log(this.connection);
    }
}
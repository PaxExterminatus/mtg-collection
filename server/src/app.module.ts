import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ApiCollectionController } from './api.collection.controller'
import { ApiCollectionService } from './api.collection.service'
import { join } from 'path'

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public')
        }),
    ],
    controllers: [ApiCollectionController],
    providers: [ApiCollectionService]
})
export class AppModule {}
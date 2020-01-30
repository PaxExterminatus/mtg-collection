import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CollectionEntity, CollectionController, CollectionService } from './'

@Module({
    imports: [TypeOrmModule.forFeature([CollectionEntity])],
    providers: [CollectionService],
    controllers: [CollectionController]
})
class CollectionModule {}

export {
    CollectionModule
}

export default CollectionModule
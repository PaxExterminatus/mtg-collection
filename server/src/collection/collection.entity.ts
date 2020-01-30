import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
    name: 'collection'
})
class CollectionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    number: number;
}

export {
    CollectionEntity
}

export default CollectionEntity
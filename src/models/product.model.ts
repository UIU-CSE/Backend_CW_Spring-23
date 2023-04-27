import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  readonly id?: number;

  @Column('varchar', { length: 255, name: 'name', nullable: false })
  readonly name: string;

  @Column('integer', { name: 'price', nullable: false })
  readonly price: number;

  @Column('integer', { name: 'quantity', nullable: true })
  readonly quantity: number;
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Merchant } from './merchant.entity';

@Entity({ schema: 'merchant', name: 'aisle' })
export class Aisle {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  aisle_id: number;

  @Column({ type: 'bigint' })
  merchant_id: number;

  @Column({ type: 'varchar', length: 255 })
  aisle_name: string;

  @Column({ type: 'varchar', length: 255 })
  aisle_description: string;

  @Column({ type: 'bool', default: true })
  active: boolean;

  @ManyToOne(() => Merchant)
  @JoinColumn({ name: 'merchant_id' })
  merchant: Merchant;
}

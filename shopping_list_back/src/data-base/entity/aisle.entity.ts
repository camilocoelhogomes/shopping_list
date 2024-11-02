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
  aisleId: number;

  @Column({ type: 'bigint' })
  merchantId: number;

  @Column({ type: 'varchar', length: 255 })
  aisleName: string;

  @Column({ type: 'varchar', length: 255 })
  aisleDescription: string;

  @Column({ type: 'bool', default: true })
  active: boolean;

  @ManyToOne(() => Merchant)
  @JoinColumn({ name: 'merchant_id' })
  merchant: Merchant;
}

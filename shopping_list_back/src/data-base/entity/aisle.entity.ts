import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Merchant } from './merchant.entity';
import { MerchantAisleCategory } from './category-aisle.entity';

@Entity({ schema: 'merchant', name: 'aisle' })
export class Aisle {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'aisle_id' })
  aisleId: number;

  @PrimaryColumn({ type: 'bigint', name: 'merchant_id' })
  merchantId: number;

  @Column({ type: 'varchar', length: 255, name: 'aisle_name' })
  aisleName: string;

  @Column({ type: 'varchar', length: 255, name: 'aisle_description' })
  aisleDescription: string;

  @Column({ type: 'bool', default: true, name: 'active' })
  active: boolean;

  @Column({ type: 'int', name: 'aisle_number' })
  aisleNumber: number;

  @ManyToOne(() => Merchant)
  @JoinColumn({ name: 'merchant_id' })
  merchant: Merchant;

  @OneToMany(
    () => MerchantAisleCategory,
    (merchantAisleCategory) => merchantAisleCategory.aisle,
  )
  aisleCategorys: MerchantAisleCategory[];
}

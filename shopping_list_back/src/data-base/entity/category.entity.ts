import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';
import { Merchant } from './merchant.entity';
import { MerchantAisleCategory } from './category-aisle.entity';

@Entity({ schema: 'merchant', name: 'category' })
export class Category {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'category_id' })
  categoryId: number;

  @PrimaryColumn({ type: 'bigint', name: 'merchant_id' })
  merchantId: number;

  @Column({ type: 'varchar', length: 255, name: 'category_name' })
  categoryName: string;

  @Column({ type: 'varchar', length: 255, name: 'category_description' })
  categoryDescription: string;

  @Column({ type: 'bool', default: true, name: 'active' })
  active: boolean;

  @ManyToOne(() => Merchant)
  @JoinColumn({ name: 'merchant_id', referencedColumnName: 'merchantId' })
  merchant: Merchant;

  @OneToMany(
    () => MerchantAisleCategory,
    (merchantAisleCategory) => merchantAisleCategory.category,
  )
  aisleCategorys: MerchantAisleCategory[];
}

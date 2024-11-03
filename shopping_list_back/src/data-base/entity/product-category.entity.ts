import {
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { Merchant } from './merchant.entity';

@Entity({ schema: 'merchant', name: 'product_category' })
@Index('idx_category_merchant_id', ['merchantId'])
export class ProductCategory {
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
  @JoinColumn({ name: 'merchant_id' })
  merchant: Merchant;
}

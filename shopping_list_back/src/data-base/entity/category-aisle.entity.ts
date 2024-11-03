import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Aisle } from './aisle.entity';
import { Merchant } from './merchant.entity';
import { ProductCategory } from './product-category.entity';

@Entity({ schema: 'merchant', name: 'merchant_aisle_category' })
export class MerchantAisleCategory {
  @PrimaryColumn({ type: 'bigint' })
  merchantId: number;

  @PrimaryColumn({ type: 'bigint' })
  aisleId: number;

  @PrimaryColumn({ type: 'bigint' })
  categoryId: number;

  @Column({ type: 'int' })
  position: number;

  @Column({ type: 'bool', default: true })
  active: boolean;

  @ManyToOne(() => Merchant)
  @JoinColumn({ name: 'merchant_id' })
  merchant: Merchant;

  @ManyToOne(() => Aisle)
  @JoinColumn({ name: 'aisle_id' })
  aisle: Aisle;

  @ManyToOne(() => ProductCategory)
  @JoinColumn({ name: 'category_id' })
  category: ProductCategory;
}

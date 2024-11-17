import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Aisle } from './aisle.entity';
import { Merchant } from './merchant.entity';
import { Category } from './category.entity';

@Entity({ schema: 'merchant', name: 'merchant_aisle_category' })
export class MerchantAisleCategory {
  @PrimaryColumn({ type: 'bigint', name: 'merchant_id' })
  merchantId: number;

  @PrimaryColumn({ type: 'bigint', name: 'aisle_id' })
  aisleId: number;

  @PrimaryColumn({ type: 'bigint', name: 'category_id' })
  categoryId: number;

  @Column({ type: 'int', name: 'position' })
  position: number;

  @Column({ type: 'bool', default: true, name: 'active' })
  active: boolean;

  @ManyToOne(() => Merchant)
  @JoinColumn({ name: 'merchant_id', referencedColumnName: 'merchantId' })
  merchant: Merchant;

  @ManyToOne(() => Aisle)
  @JoinColumn({ name: 'aisle_id', referencedColumnName: 'aisleId' })
  aisle: Aisle;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'categoryId' })
  category: Category;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { MerchantOwner } from '../../merchant-owner/entities/merchant-owner.entity';

@Entity({ schema: 'merchant', name: 'merchant' })
@Index('idx_merchant_uri', ['merchantUri'], { unique: true })
export class Merchant {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'merchant_id' })
  merchantId: number;

  @Column({ type: 'varchar', length: 255, name: 'merchant_name' })
  merchantName: string;

  @Column({ type: 'bigint', name: 'owner_id' })
  ownerId: number;

  @Column({ type: 'varchar', length: 20, name: 'merchant_phone_number', nullable: true })
  merchantPhoneNumber?: string;

  @Column({ type: 'varchar', length: 50, name: 'merchant_document_number', nullable: true })
  merchantDocumentNumber?: string;

  @Column({ type: 'varchar', length: 50, name: 'merchant_uri' })
  merchantUri: string;

  @ManyToOne(() => MerchantOwner)
  @JoinColumn({ name: 'owner_id' })
  owner: MerchantOwner;
}
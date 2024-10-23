import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'merchant', name: 'merchant_owner' })
export class MerchantOwner {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_id' })
  userId: number;

  @Column({ type: 'varchar', length: 255, name: 'user_provider_id' })
  userProviderId: string;

  @Column({ type: 'varchar', length: 255, name: 'display_name' })
  displayName: string;

  @Column({ type: 'varchar', length: 255, name: 'email' })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'phone_number' })
  phoneNumber?: string;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'title' })
  title?: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    name: 'preferred_name',
  })
  preferredName?: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    name: 'document_number',
  })
  documentNumber?: string;
}

import { UserEntity } from '../users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'shopping_list' })
export class ShoppingListEntity {
  @PrimaryGeneratedColumn('increment')
  shoppingListId: number;

  @Column({ type: 'varchar', length: 300 })
  name: string;
  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @Column({ type: 'varchar', length: 300 })
  lastChangedBy: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  internalComment: string | null;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity;
}

import { ShoppingListEntity } from '../shopping-list/shopping-list.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @Column({ type: 'varchar', length: 300 })
  username: string;

  @Column({ type: 'varchar', length: 300 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  password: string;

  @PrimaryGeneratedColumn('increment')
  id: number;

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

  @OneToMany(() => ShoppingListEntity, (shoppingList) => shoppingList.owner)
  shoppingLists: ShoppingListEntity[];
}

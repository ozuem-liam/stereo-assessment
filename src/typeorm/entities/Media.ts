import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'media' })
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: ['audio', 'image'] })
  type: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ default: 'Active' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}

import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'post' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @IsNotEmpty()
  @Column()
  title: string;

  @IsNotEmpty()
  @Column({ type: 'text' })
  content: string;

  @Column({ name: 'preview_content', length: 100 })
  previewContent: string;

  @Column({ default: 0 })
  view: number;

  @Column({ default: 0 })
  like: number;
}

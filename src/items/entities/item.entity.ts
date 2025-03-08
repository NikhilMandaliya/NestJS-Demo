import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Listing } from "./listing.entity";
import { Comment } from "./comment.entity";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  public: boolean;

  @OneToOne(() => Listing, { cascade: true })
  @JoinColumn()
  listing: Listing;

  @OneToMany(() => Comment, (comment) => comment.item, { cascade: true })
  comments: Comment[];

  constructor(item: Partial<Item>) {
    Object.assign(this, item);
  }
}

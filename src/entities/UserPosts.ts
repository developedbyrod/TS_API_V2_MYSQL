import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuidv4} from "uuid";
import { UserAPI } from "./UserAPI";

@Entity()
export class UserPosts{
    @PrimaryGeneratedColumn("uuid")
    id: string = uuidv4();

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    image: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


    @ManyToOne(() => UserAPI, userAPI => userAPI.posts)
    user: UserAPI;

    constructor(title: string, content: string, image: string, createdAt: Date, updatedAt: Date, user: UserAPI){
        this.title = title;
        this.content = content;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.user = user;
    }

    
}
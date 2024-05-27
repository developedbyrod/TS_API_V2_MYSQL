import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuidv4} from "uuid";
import { UserPosts } from "./UserPosts";


@Entity()
export class UserAPI{
    
    
    @PrimaryGeneratedColumn("uuid")
    userId: string = uuidv4();

    @Column()
    userName: string;

    @Column()
    userEmail: string;

    @Column({nullable: true})
    userBio: string;
    
    @CreateDateColumn()
    createdAd: Date;

    @UpdateDateColumn()
    updatedAt: Date;


    
    @OneToMany(() => UserPosts, post => post.user)
    posts: UserPosts[];


    constructor(userName: string, userEmail: string, userBio: string, createdAt: Date, updatedAt: Date, posts: UserPosts[]){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userBio = userBio;
        this.createdAd = createdAt;
        this.updatedAt = updatedAt;
        this.posts = posts;
    }


    getUsername() : string{
        return this.userName;
    }

    setUsername(userName: string){
        this.userName = userName;
    }

}
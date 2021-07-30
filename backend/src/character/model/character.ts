/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Character {
    @Field(() => ID, {nullable: true})
    id: string;
    @Field({nullable: true})
    name: string;
    @Field({nullable: true})
    image: string;
    @Field({nullable: true})
    species: string;
    @Field({nullable: true})
    gender: string;
    @Field({nullable: true})
    user: string;
}
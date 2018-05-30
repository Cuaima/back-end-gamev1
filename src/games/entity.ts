import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsOptional } from 'class-validator';

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  //For some unknown reason, my code transforms numbers in this column to string instead of throwing an error when a number is given.
  //More time is needed to research this bug/feature. 
  @IsString()
  @Column('text', {nullable:false})
  name: string

  @IsOptional()
  @IsString()
  @Column('text', {nullable:false})
  color: string

  @Column('json')
  board?: string[][]
}

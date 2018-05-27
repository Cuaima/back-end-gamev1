import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsJSON, IsIn } from 'class-validator';

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @IsString()
  // @IsIn(values: "red blue green yellow magenta")
  @Column('text', {nullable:false})
  color: string

//   @Column('text')
//   board: string

    // public get data(): any {
    //     if (this.board) return JSON.parse(this.board);
    //     else return null;
    // }

    // public set data(data: any) {
    //     if (data) this.board = JSON.stringify(data);
    //     else this.data = null;
//     }
  // @IsJSON() //not working
  @Column('json') //"simple-json"
  board: {}
}
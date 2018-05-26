import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @Column('text', {nullable:false})
  color: string

//   @Column('text')
//   board: string

//     public get data(): any {
//         if (this.board) return JSON.parse(this.board);
//         else return null;
//     }

//     public set data(data: any) {
//         if (data) this.board = JSON.stringify(data);
//         else this.data = null;
//     }
    @Column("simple-json")
        board: {}
}
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../user/entities/user.entity';


@Table
export class Product  extends Model{

    @Column
    name: string;

    @Column
    description: string;

    @Column
    price: number;

    @Column
    stock: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;
}

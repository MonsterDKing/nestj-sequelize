
import { Table, Column, Model, HasOne } from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';

@Table
export class User extends Model {

    @Column
    username: string;

    @Column
    password: string;


    @HasOne(() => Product)
    product: Product;
    
}

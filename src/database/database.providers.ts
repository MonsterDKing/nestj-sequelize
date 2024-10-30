import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3307,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([User,Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

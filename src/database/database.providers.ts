import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/entities/user.entity';

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
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {


  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User
  ) {}

  async create(createUserDto: CreateUserDto) {

    return await this.userRepository.create({
      username: createUserDto.username,
      password: createUserDto.password
    });
  }

  findAll() : Promise<User[]> {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.findByPk(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(updateUserDto, {
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.userRepository.destroy({
      where: {
        id
      }
    });
  }
}

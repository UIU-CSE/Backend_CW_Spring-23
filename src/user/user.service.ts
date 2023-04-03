import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async createUser(createUserDTO: CreateUserDTO) {
    const result = this.userRepository.create(createUserDTO);
    return result;
  }
}

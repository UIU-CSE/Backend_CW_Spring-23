import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createuserDTO: CreateUserDTO) {
    return this.userService.createUser(createuserDTO);
  }
}

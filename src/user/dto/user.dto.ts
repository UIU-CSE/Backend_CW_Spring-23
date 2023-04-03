import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({
    name: 'first_name',
    description: "User's First Name",
    type: String,
    example: 'Developer',
  })
  //@IsString() -- class-validator
  readonly first_name: string;

  @ApiProperty({
    name: 'middle_name',
    description: "User's Middle Name",
    type: String,
    example: 'xx',
  })
  //@IsString() -- class-validator
  readonly middle_name: string;

  @ApiProperty({
    name: 'last_name',
    description: "User's Last Name",
    type: String,
    example: 'Engineer',
  })
  //@IsString() -- class-validator
  readonly last_name: string;
}

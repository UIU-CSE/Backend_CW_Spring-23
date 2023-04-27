import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    name: 'first_name',
    description: "User's First Name",
    type: String,
    example: 'Developer',
  })
  @IsString()
  readonly first_name: string;

  @ApiProperty({
    name: 'middle_name',
    description: "User's Middle Name",
    type: String,
    example: 'xx',
  })
  @IsString()
  @IsOptional()
  readonly middle_name: string;

  @ApiProperty({
    name: 'last_name',
    description: "User's Last Name",
    type: String,
    example: 'Engineer',
  })
  @IsString()
  readonly last_name: string;

  @ApiProperty({
    name: 'email',
    description: 'Email of the user',
    type: String,
    example: 'dev@dev.com',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    name: 'status',
    description: 'ACTIVE/INACTIVE',
    type: String,
    example: 'active',
  })
  @IsString()
  readonly status: string;
}

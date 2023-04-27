import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AddProductDTO {
  @ApiProperty({
    name: 'name',
    description: "Product's name",
    type: String,
    example: 'Pineapple',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    name: 'price',
    description: "Particular Product's Price",
    type: Number,
    example: 100,
  })
  @IsInt()
  readonly price: number;

  @ApiProperty({
    name: 'quantity',
    description: "Product's Quantity",
    type: Number,
    example: 5,
  })
  @IsInt()
  readonly quantity: number;
}

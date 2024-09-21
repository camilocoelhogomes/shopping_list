import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    example: 'John',
    description: 'User name',
    maxLength: 50,
    required: true,
  })
  name: string;
  @ApiProperty({
    example: 'John@doe.com',
    description: 'User email',
    maxLength: 50,
  })
  email: string;
  @ApiProperty({
    example: 'asdfg*01',
    description: 'User password',
    maxLength: 18,
  })
  password: string;
  @ApiProperty({
    example: 'asdfg*01',
    description: 'Mesmo valor enviado no campo password',
    maxLength: 18,
  })
  confirmPassword: string;
}

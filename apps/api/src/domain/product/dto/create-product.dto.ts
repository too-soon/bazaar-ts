import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsUUID()
  storeId!: string;

  /** @todo do not allow whitespace and symbols */
  @IsNotEmpty()
  @IsString()
  slug!: string;
}

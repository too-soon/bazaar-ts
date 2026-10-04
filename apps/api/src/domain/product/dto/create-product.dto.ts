import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @Transform(({ value }: { value: string }) => ({
    id: value,
  }))
  @IsNotEmpty()
  @IsUUID()
  storeId!: string;
}

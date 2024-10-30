import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {

    @ApiProperty()
    @IsString()
    readonly name: string;
    @ApiProperty()
    @IsString()
    readonly description: string;
    @ApiProperty()
    @IsNumber()
    readonly price: number;
    @ApiProperty()
    @IsNumber()
    readonly stock: number;
}

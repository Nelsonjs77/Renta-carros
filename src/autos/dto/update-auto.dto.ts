import { PartialType } from '@nestjs/mapped-types';
import { IsString, Length, IsNumber, Min } from 'class-validator';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { CreateAutoDto } from './create-auto.dto';

export class UpdateAutoDto extends PartialType(CreateAutoDto) {
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 10, {message: ValidationMessages.TAMAÑO_CADENA})
    placas?: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(3, 25, {message: ValidationMessages.TAMAÑO_CADENA})
    marca?: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(3, 25, {message: ValidationMessages.TAMAÑO_CADENA})
    modelo?: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 15, {message: ValidationMessages.TAMAÑO_CADENA})
    color?: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 15, {message: ValidationMessages.TAMAÑO_CADENA})
    fechaCompra?: string;
    @IsNumber( {allowNaN:false}, {message: ValidationMessages.ES_NUMERO})
    @Min(0)
    rentaDiaria?: number;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 25, {message: ValidationMessages.TAMAÑO_CADENA})
    distribuidor?: string;
}

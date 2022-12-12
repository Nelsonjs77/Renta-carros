import { PartialType } from '@nestjs/mapped-types';
import { IsString, Length, IsNumber, Min, Max } from 'class-validator';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { CreateDistribuidoreDto } from './create-distribuidore.dto';


export class UpdateDistribuidoreDto extends PartialType(CreateDistribuidoreDto) {
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 80, {message: ValidationMessages.TAMAÑO_CADENA})
    nombreComercial?: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 50, {message: ValidationMessages.TAMAÑO_CADENA})
    dirreccion?: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 25, {message: ValidationMessages.TAMAÑO_CADENA})
    ciudad?: string;
    @IsNumber( {allowNaN:false}, {message: ValidationMessages.ES_NUMERO})
    @Min(10)
    @Max(10)
    telefono?: number;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 50, {message: ValidationMessages.TAMAÑO_CADENA})
    nombreContacto?: string;
}

import { IsString, Length, IsNumber, Min, Max, IsEmail } from 'class-validator';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';

export class CreateClienteDto {
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 80, {message: ValidationMessages.TAMAÑO_CADENA})
    nombre: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 50, {message: ValidationMessages.TAMAÑO_CADENA})
    dirreccion: string;
    @IsNumber( {allowNaN:false}, {message: ValidationMessages.ES_NUMERO})
    telefono: number;
    @IsEmail({})
    email: string;
}
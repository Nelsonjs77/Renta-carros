import { IsString, Length } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages.helper";

export class CreateRegistroAlquilerDto {
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 10, {message: ValidationMessages.TAMAÑO_CADENA})
    placas: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 10, {message: ValidationMessages.TAMAÑO_CADENA})
    fechaEntrada: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 80, {message: ValidationMessages.TAMAÑO_CADENA})
    nombreClientes: string;
}
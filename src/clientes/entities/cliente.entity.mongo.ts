import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class ClienteM extends Document{ 

    @Prop({
        unique: true,
        index: true,
    })
    nombre: string;

    @Prop({
        unique: true,
        index: true,
    })
    dirreccion: string;

    @Prop()
    telefono: number;

    @Prop({
        unique: true,
        index: true,
    })
    email: string;
    }

    //esta exportacion permite ligar el esquema al modulo en el siguiente paso
    export const ClienteSchema = SchemaFactory.createForClass(ClienteM);
import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String},
    image:{type: String},
    phone: {type:String},
    city: {type:String},
    postalCode: {type:String},
    number: {type:String},
    streetAddress: {type:String},

} );

export const User = models?.User || model('User', UserSchema);
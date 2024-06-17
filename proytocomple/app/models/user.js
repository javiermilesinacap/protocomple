//npm install mongoose
import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, validate: passwd => {
        if(!passwd?.lenght || passwd.lenght < 8){
            new Error('Password no cumple con requisito 8 caracteres');
        }
    } }
}, {timestamps: true});

UserSchema.post('validate', (user) => {
    console.log(user);

})
export const User = models?.User || model('User', UserSchema);
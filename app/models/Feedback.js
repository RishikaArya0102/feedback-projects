import { Schema, model, models} from 'mongoose'

const Feedback = new Schema({value: {type: String, required: true}, txtValue: {type: String, required: true}}, {timeStamps: true});

export const modl = models?.modl || model('modl', Feedback);
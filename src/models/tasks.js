const {Schema, model} = require('mongoose')

const TaskSchema = new Schema({
    creator: {type: Schema.Types.ObjectId, ref: 'employees'},
    desc: {type: String, required: true},
    date: {type: Date, default: new Date()},
    category: {
        type: Number,
        required: true,
        enum: [
            0, // planned
            1, // todo
            2, // in process
            3  // completed
        ]
    }
})
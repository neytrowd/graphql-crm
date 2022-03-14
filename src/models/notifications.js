const {Schema, model} = require('mongoose');

const NotificationSchema = new Schema({
    creator: {type: Schema.Types.ObjectId, ref: 'employees'},
    desc: {type: String, required: true},
    date: {type: Date, default: new Date()},
    important: {type: Boolean, default: false}
})

module.exports = model('notifications', NotificationSchema)
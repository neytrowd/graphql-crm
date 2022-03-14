const {Schema, model} = require('mongoose')

const ProjectSchema = new Schema({
    name: {type: String, required: true},
    desc: {type: String, default: ''},
    startDate: {type: Date, default: new Date()},
    endDate: {type: Date, default: new Date()},
    activeStatus: {type: Boolean, default: true},
    estimateCost: {type: Number, default: 0},
    estimateDate: {type: Date, default: new Date()},
    taskCounter: {type: Number, default: 0},

    avatar: {
        id: {type: String, default: ''},
        name: {type: String, default: ''}
    },

    priority: {
        type: Number,
        default: 1,
        enum: [
            0, // low
            1, // medium
            2, // high
        ]
    },

    employees: [{
        type: Schema.Types.ObjectId, ref: 'employees'
    }],

    timeline: [{
        type: Schema.Types.ObjectId, ref: 'timeline'
    }],

    tasks: [{
        type: Schema.Types.ObjectId, ref: 'tasks'
    }],

    timesheet: [{
        type: Schema.Types.ObjectId, ref: 'timesheet'
    }]

})

module.exports = model('projects', ProjectSchema)
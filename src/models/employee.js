const {Schema, model} = require('mongoose');

const EmployeeSchema = new Schema({
    firstname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    emailVerified: {type: Boolean, default: false},
    password: {type: String, required: true},
    position: {type: String, default: ''},
    jobDesc: {type: String, default: ''},
    status: {type: Boolean, default: true},
    startDate: {type: Date, default: new Date()},
    endDate: {type: Date, default: new Date()},
    percentFilling: {type: Number, default: 0},

    lastname: {type: String, default: ''},
    bio: {type: String, default: ''},
    birthday: {type: Date, default: new Date()},
    marriedStatus: {type: String, default: ''},
    gender: {type: String, default: ''},
    phoneNumber: {type: String, default: ''},
    language: {type: String, default: ''},
    address: {type: String, default: ''},
    country: {type: String, default: ''},
    city: {type: String, default: ''},
    postalCode: {type: String, default: ''},

    role: {
        type: Number,
        default: 1,
        enums: [
            0, // admin,
            1, // employee
        ]
    },

    avatar: {
        id: {type: String, default: ''},
        name: {type: String, default: ''}
    },

    notifications: [{
        type: Schema.Types.ObjectId,
        ref: 'notifications'
    }],

    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'projects'
    }]
})

module.exports = model('employees', EmployeeSchema)
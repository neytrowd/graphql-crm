const Employee = require('../models/employee')

const EmployeeRepository = {

    async find(filter) {
        return Employee.findOne(filter)
    },

    async findMany(filter) {
        return Employee.find(filter)
    },

    async create(data) {
        let newEmployee = new Employee(data)
        await newEmployee.save()
        return newEmployee;
    }

}

module.exports = EmployeeRepository
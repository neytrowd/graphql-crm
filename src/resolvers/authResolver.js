const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Employee = require('../models/employee')

const authResolver = {

    Mutation: {
        async signIn(_, {data}) {
            let {email, password} = data
            let employee = await Employee.findOne({email})

            if (!employee) return {
                code: 400, success: false, message: 'This email is not registered!'
            }

            let passwordMatching = await bcrypt.compare(password, employee.password)
            if (!passwordMatching)  return {
                code: 400, success: false, message: 'Wrong password!'
            }

            let token = jwt.sign({id: employee._id}, process.env.JWT_SECRET);
            return {
                code: 200, success: true, message: 'Authorized', token, userId: employee._id
            }
        },

        async signUp(_, {data}) {
            let {email, password} = data

            let candidate = await Employee.findOne({email})
            if(candidate) return {
                code: 400, success: false, message: 'This user already exists!'
            }

            let hashedPassword = await bcrypt.hash(password, 12)
            let newEmployee = new Employee({...data, password: hashedPassword})
            await newEmployee.save()

            return {
                code: 200, success: true, message: 'User created!'
            }
        }

    }

}

module.exports = authResolver;
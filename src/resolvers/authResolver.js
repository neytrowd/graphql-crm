const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Employee = require('../models/employee')
const {OAuth2Client} = require('google-auth-library')
const googleClient = new OAuth2Client(process.env.GOOGLE_LOGIN_CLIENT_ID)

const authResolver = {

    Mutation: {
        async signIn(_, {data}) {
            let {email, password} = data
            let employee = await Employee.findOne({email})

            if (!employee) return {
                code: 400, success: false, message: 'This email is not registered!'
            }

            let passwordMatching = await bcrypt.compare(password, employee.password)
            if (!passwordMatching) return {
                code: 400, success: false, message: 'Wrong password!'
            }

            let token = jwt.sign({id: employee._id}, process.env.JWT_SECRET);
            return {
                code: 200, success: true, message: 'Authorized', data: {token, userId: employee._id}
            }
        },

        async signUp(_, {data}) {
            let {email, password} = data

            let candidate = await Employee.findOne({email})
            if (candidate) return {
                code: 400, success: false, message: 'This user already exists!'
            }

            let hashedPassword = await bcrypt.hash(password, 12)
            let newEmployee = new Employee({...data, password: hashedPassword})
            await newEmployee.save()

            return {
                code: 200, success: true, message: 'User created!'
            }
        },

        async googleSignIn(_, {data}) {
            const {tokenId} = data
            const ticket = await googleClient.verifyIdToken({
                idToken: tokenId,
                audience: process.env.GOOGLE_LOGIN_CLIENT_ID
            })

            const {name, email} = ticket.getPayload()
            let candidate = await Employee.findOne({email})

            if (candidate) {
                let token = jwt.sign({id: candidate._id}, process.env.JWT_SECRET)
                return {
                    code: 200, success: true, message: 'Authorized', data: {token, userId: candidate._id}
                }
            }

            let employee = new Employee({firstname: name, email})
            await employee.save()

            let tokenValue = jwt.sign({id: employee._id}, process.env.JWT_SECRET)
            return {
                code: 200, success: true, message: 'Authorized', data: {token: tokenValue, userId: employee._id}
            }
        }

    }

}

module.exports = authResolver;
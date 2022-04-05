const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library')
const Employee = require('../repository/employeeRepository')
const googleClient = new OAuth2Client(process.env.GOOGLE_LOGIN_CLIENT_ID)

const authResolver = {

    Mutation: {
        async signIn(_, {data}) {
            let {email, password} = data
            let employee = await Employee.find({email})

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
            let candidate = await Employee.find({email})

            if (candidate) return {
                code: 400, success: false, message: 'This user already exists!'
            }

            let hashedPassword = await bcrypt.hash(password, 12)
            await Employee.create({...data, password: hashedPassword})

            return {
                code: 200, success: true, message: 'User created!'
            }
        },

        async tokenIsValid(_, {token}) {
            let decoded = jwt.decode(token, process.env.JWT_SECRET)

            if (!decoded) return {
                code: 400, success: false, message: 'Token is invalid!',
            }

            return {
                code: 200, success: true, message: 'Token is valid!',
                data: {userId: decoded.id}
            }
        },

        async googleSignIn(_, {data}) {
            const {tokenId} = data
            const ticket = await googleClient.verifyIdToken({
                idToken: tokenId,
                audience: process.env.GOOGLE_LOGIN_CLIENT_ID
            })

            const {name, email} = ticket.getPayload()
            let candidate = await Employee.find({email})

            if (candidate) {
                let token = jwt.sign({id: candidate._id}, process.env.JWT_SECRET)
                return {
                    code: 200, success: true, message: 'Authorized', data: {token, userId: candidate._id}
                }
            }

            let employee = await Employee.create({firstname: name, email})
            let tokenValue = jwt.sign({id: employee._id}, process.env.JWT_SECRET)

            return {
                code: 200, success: true, message: 'Authorized', data: {token: tokenValue, userId: employee._id}
            }
        }
    }

}

module.exports = authResolver;
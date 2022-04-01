const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')
const handlebars = require('handlebars')
const nodemailer = require('nodemailer')
const Employee = require('../models/employee')

const verificationResolver = {

    Query: {
        async loadVerificationData(_, {userId}) {
            const employee = await Employee.findOne({_id: userId})

            if (!employee) {
                return {
                    code: 400, success: false, message: 'User not found!',
                }
            }

            return {
                code: 200, success: true, message: 'Verification data loaded!',
                data: {email: employee.email}
            }
        }
    },

    Mutation: {

        async sendVerification(_, {email}) {
            const employee = await Employee.findOne({email})
            const compiledHtml = handlebars.compile(fs.readFileSync(
                path.join(__dirname, '../static/verification.html'), {
                    encoding: 'utf-8'
                }
            ))

            const replacements = {
                receiver_name: employee.firstname,
                verification_link: `http://localhost:3000/auth/verify/${employee._id}`,
                sender_name: 'Avel Neytrowd',
                sender_time: new Date().toLocaleTimeString(),
            }

            const htmlToSend = compiledHtml(replacements)
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: process.env.MAILER_USER_EMAIL,
                    pass: process.env.MAILER_USER_PASSWORD
                },
            })

            await transporter.sendMail({
                from: `"Avel Neytrowd" <${process.env.MAILER_USER_EMAIL}>`,
                to: [email],
                subject: 'Account Verification',
                html: htmlToSend
            })

            return {
                code: 200, success: true, message: 'Verification sent!'
            }
        },

        async verifyAccount(_, {data}) {
            const {jobDesc, email, password} = data
            const employee = await Employee.findOne({email})

            if (!employee) return {
                code: 400, success: false, message: 'User not found!'
            }

            let passwordMatching = await bcrypt.compare(password, employee.password)
            if (!passwordMatching) return {
                code: 400, success: false, message: 'Wrong password!'
            }

            employee.emailVerified = true
            employee.jobDesc = jobDesc
            await employee.save()

            return {
                code: 200, success: true, message: 'Account successfully verified!'
            }
        }
    }

}

module.exports = verificationResolver;
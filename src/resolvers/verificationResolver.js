const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')
const nodemailer = require('nodemailer')
const Employee = require('../models/employee')

const verificationResolver = {

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
                verification_link: `http://127.0.0.1:3000/auth/verify/${employee._id}`,
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

            return {
                code: 200, success: true, message: 'Account verified!'
            }
        }
    }

}

module.exports = verificationResolver;
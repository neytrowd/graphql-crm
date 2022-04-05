const Employee = require('../repository/employeeRepository')

const teamResolver = {

    Query: {
        async getTeamMembers(_, {id}) {
            let currentUser = await Employee.find({_id: id})

            if (!currentUser.emailVerified) return {
                code: 400, success: false, message: 'You are not verified!',
            }

            let employees = await Employee.findMany({
                emailVerified: true,
                role: 1 // user
            })

            return {
                code: 200,
                success: true,
                message: 'Received a list of employees',
                data: {employees}
            }
        },

        async getRegisteredUsers(_, {id}) {
            let currentUser = await Employee.find({_id: id})

            if (!currentUser.emailVerified) return {
                code: 400, success: false, message: 'You are not verified!',
            }

            let employees = await Employee.findMany({
                emailVerified: false,
                role: 1 // user
            })

            return {
                code: 200,
                success: true,
                message: 'Received a list of employees',
                data: {employees}
            }
        }
    }

}

module.exports = teamResolver
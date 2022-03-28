const {gql} = require('apollo-server-express')

const employeeType = gql`

    type Avatar{
        id: String!
        name: String!
    }

    type Notification{
        id: ID!
        creator: String!
        desc: String!
        date: String!
        important: Boolean!
    }

    type Employee{
        id: ID!
        firstname: String!
        lastname: String!
        email: String!
        emailVerified: Boolean!
        password: String!
        position: String!
        jobDesc: String!
        status: String!
        startDate: String!
        endDate: String!
        percentFilling: Float!
        bio: String!
        birthday: String!
        marriedStatus: String!
        gender: String!
        phoneNumber: String!
        language: String!
        address: String!
        country: String!
        city: String!
        postalCode: String!
        role: Int
        avatar: Avatar
        notifications: [Notification!]!
    }

    type Query{
        employees: [Employee!]!
    }

`

module.exports = employeeType;
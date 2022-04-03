const {gql} = require('apollo-server-express')

const teamType = gql`

    type GetData{
        employees: [Employee!]!
    }

    type GetTeamResponse implements MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
        data: GetData
    }

    type GetRegisteredResponse implements MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
        data: GetData
    }

    type Query{
        getTeamMembers(id: String!): GetTeamResponse!
        getRegisteredUsers(id: String!): GetRegisteredResponse!
    }

`

module.exports = teamType
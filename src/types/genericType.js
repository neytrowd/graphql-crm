const {gql} = require('apollo-server-express')

const genericType = gql`

    interface MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
    }

`

module.exports = genericType;
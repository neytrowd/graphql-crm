const {gql} = require('apollo-server-express')

const authType = gql`
    
    type SignUpResponse implements MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
    }

    type SignInResponse implements MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
        token: String
        userId: String
    }
    
    input User{
        email: String!
        password: String!
    }
    
    input NewUser{
        firstname: String!
        email: String!
        password: String!
    }
    
    type Mutation{
        signIn(data: User!): SignInResponse!
        signUp(data: NewUser!): SignUpResponse!
    }

`

module.exports = authType;
const {gql} = require('apollo-server-express')

const authType = gql`

    type SignUpResponse implements MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
    }

    type SignInData{
        token: String,
        userId: String
    }

    type SignInResponse implements MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
        data: SignInData
    }
    
    type TokenIsValidData{
        userId: String!
    }
    
    type TokenIsValidResponse implements MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
        data: TokenIsValidData
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

    input GoogleUser{
        tokenId: String!
    }

    type Mutation{
        signIn(data: User!): SignInResponse!
        signUp(data: NewUser!): SignUpResponse!
        tokenIsValid(token: String!): TokenIsValidResponse!
        googleSignIn(data: GoogleUser!):SignInResponse!
    }

`

module.exports = authType;
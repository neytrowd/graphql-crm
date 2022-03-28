const {gql} = require('apollo-server-express')

const verificationType = gql`

    type SendVerificationResponse implements MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
    }

    type VerifyAccountResponse implements MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
    }

    input VerifyAccount{
        lastname: String!
        jobTitle: String!
        email: String!
        password: String!
    }

    type Mutation{
        sendVerification(email: String): SendVerificationResponse!
        verifyAccount(data: VerifyAccount): VerifyAccountResponse!
    }

`

module.exports = verificationType
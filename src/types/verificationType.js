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
    
    type LoadVerificationData{
        email: String!
    }
    
    type LoadVerificationDataResponse implements MutationResponse{
        code: Int!
        success: Boolean!
        message: String!
        data: LoadVerificationData
    }

    input VerifyAccount{
        jobDesc: String!
        email: String!
        password: String!
    }
    
    type Query{
        loadVerificationData(userId: String): LoadVerificationDataResponse!
    }

    type Mutation{
        sendVerification(email: String): SendVerificationResponse!
        verifyAccount(data: VerifyAccount): VerifyAccountResponse!
    }

`

module.exports = verificationType
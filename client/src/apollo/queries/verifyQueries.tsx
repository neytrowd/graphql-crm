import {gql} from '@apollo/client';
import {MUTATION_RESPONSE} from "./responseQueries";

export const LOAD_VERIFICATION_DATA = gql`
    query LoadVerificationData($userId: String){
        loadVerificationData(userId: $userId){
            code
            success
            message
            data {
                email
            }
        }
    }
`

export const VERIFY_ACCOUNT = gql`
    mutation VerifyAccount($data: VerifyAccount){
        verifyAccount(data: $data){
            ...Response
        }
    }${MUTATION_RESPONSE}
`


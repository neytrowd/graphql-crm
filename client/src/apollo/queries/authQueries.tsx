import {gql} from '@apollo/client';
import {MUTATION_RESPONSE} from "./responseQueries";

export const SIGN_UP = gql`
    mutation SignUp($data: NewUser!){
        signUp(data: $data){
            ...Response
        }
    }${MUTATION_RESPONSE}
`

export const SIGN_IN = gql`
    mutation SignUp($data: User!){
        signIn(data: $data){
            ...Response
            data {
                token
                userId
            }
        }
    }${MUTATION_RESPONSE}
`

export const GOOGLE_SIGN_IN = gql`
    mutation GoogleSignIn($data: GoogleUser!){
        googleSignIn(data: $data){
            ...Response,
            data {
                token
                userId
            }
        }
    }${MUTATION_RESPONSE}
`
import {gql} from '@apollo/client';

export const MUTATION_RESPONSE = gql`
    fragment Response on MutationResponse{
        code
        success
        message
    }
`
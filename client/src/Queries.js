import {gql} from '@apollo/client';

const EMPLOYEE = gql`
    fragment Employee on  Employee{
        id,
        firstname,
        lastname
    }
`

export const ALL_EMPLOYEE = gql`
    query employeeList{
        employees {
           ...Employee
        }
    }${EMPLOYEE}
`
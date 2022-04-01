export interface ILogin {
    email: String,
    password: String
}

export interface IRegister {
    firstname: String,
    email: String,
    password: String
}

export interface IRegisterForm extends IRegister{
    confirmPassword: String
}

export interface IVerificationForm{
    jobDesc: String,
    email: String,
    password: String
}
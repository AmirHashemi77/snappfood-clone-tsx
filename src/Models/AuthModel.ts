export interface UserDataObject{
    id:string,
    name:string,
    phone:string,
    password:string
}
export enum AuthStep{
    phoneNumber,
    password,
    signup
}
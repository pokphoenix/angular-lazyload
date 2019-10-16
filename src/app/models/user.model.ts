export default class UserModel {
    firstName :String;
    lastName :String;
    email :String;
    password:String;

    
    defaultValue(firstName,lastName,email) {
        this.firstName = firstName;
        this.lastName=lastName;
        this.email=email;
    }

}
/**
 * Created by IncWolf on 17.09.2016.
 */
export class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    };
    sayHi() {
        //return "Hello, my name is " + this.fullName; // для выполнения задания 1

        alert ("Hello, my name is " + this.fullName); // для выполнения задания 3
    }
};
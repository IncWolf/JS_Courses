/**
 * Created by IncWolf on 17.09.2016.
 */
'use strict';

window.onload = function() {
    let Person = class {
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
            return "Hello, my name is " + this.fullName;
        }
    };
    document.write(new Person('Mark').fullName);
    document.write(new Person('Mark', 'Ramsey', 10).sayHi());
};
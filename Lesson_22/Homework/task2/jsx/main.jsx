/**
 * Created by IncWolf on 17.09.2016.
 */
import {Person} from '../../task1/jsx/person.jsx'
class User extends Person {
    constructor(id, signUpDate = 0, ...props) {
        super(props[0], props[1], props[2], props[3]);
        this.signUpDate = signUpDate;
        this.id = id;
        this.sayHi = super.sayHi.bind(this);
    }
}

export let users = [new User(0, 1474101920, 'Mark'), new User(1, 1474101922, 'John', 'Zukerberg'), new User(2, 1474101926, 'Sergey', 'Galushka', 25)];

//console.log(users); //служит для вывода информации в консоль во время второй задачи. Для реализации третьей задачи данная строка закомментирована
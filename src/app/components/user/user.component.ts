import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
    selector: 'app-user',
    // template: '<h2>John Doe</h2>'
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    // styles: [`
    //     h2 {
    //         font-style: italic;
    //         color: blue;
    //     }
    // `]
})

export class UserComponent implements OnInit {
    // Properties

    user: User;

    // foo: any;
    // hasKids: boolean;
    // numberArray: number[];
    // stringArray: string[];
    // mixedArray: any[];
    // myTuple: [string, number, boolean];
    // unusable: void;
    // u: undefined;
    // n: null;

    // Methods
    constructor() {
        // this.sayHello()
        // console.log(this.age);
        // this.hasBirthDay()
        // console.log(this.age);


        // this.foo = 1;
        // this.hasKids = true;
        // this.numberArray = [1,4,34,34];
        // this.stringArray = ['Julien', 'Kataleko']
        // this.mixedArray = [true, 10, "Juju", undefined]
        // this.myTuple = ["Juliean", 26, true];
        // this.unusable = undefined;
        // this.u = undefined;
        // this.n = null;

    }

    ngOnInit() {
        this.user = {
            firstName: 'João',
            lastName: 'Kataleko',
            email: 'joao@email.com'
        }
    }

    sayHello() {
        console.log(`Hello ${this.user.firstName}`);
    }

    addNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }

}




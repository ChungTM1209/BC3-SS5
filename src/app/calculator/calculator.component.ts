import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    num1: number;
    num2: number;
    option = '+';
    result: number;

    onSubmitNum1(value) {
        this.num1 = Number(value);
    }

    onSubmitNum2(value) {
        this.num2 = Number(value);
    }

    onSelectOption(value) {
        this.option = value;
    }

    calculate() {
        switch (this.option) {
            case '+':
                this.result = this.num1 + this.num2;
                break;
            case '-':
                this.result = this.num1 - this.num2;
                break;
            case '*':
                this.result = this.num1 * this.num2;
                break;
            case '/':
                this.result = this.num1 / this.num2;
                break;
        }
    }

    constructor() {
    }

    ngOnInit() {
    }

}

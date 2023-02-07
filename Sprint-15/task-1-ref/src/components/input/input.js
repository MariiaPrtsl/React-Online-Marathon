import React, { Component } from 'react';

import './input.css';

const allOperators = [
    {cellOperator: "Kyivstar", codes: [67, 68, 96, 97, 98]},
    {cellOperator: "Vodafone", codes: [50, 66, 95, 99]},
    {cellOperator: "Lifecell", codes: [63, 73, 93]},
    {cellOperator: "3mob", codes: [91]},
    {cellOperator: "People.net", codes: [92]},
    {cellOperator: "intertelecom", codes: [89, 94]}
]

function checkCode(operatorCode, inputData) {
    let result = operatorCode.find((e) => e === parseInt(inputData));
    return typeof result === "undefined" ? false : true;
}

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstInput: "",
            secondInput: "",
            operator: "",
            sign: ""
        }
        this.firstInputRef = React.createRef()
        this.secondInputRef = React.createRef()
        this.changeOfFirstInput = this.changeOfFirstInput.bind(this);
        this.changeOfSecondInput = this.changeOfSecondInput.bind(this);
    }

    componentDidMount() {
        this.firstInputRef.current.focus();
    }

    changeOfFirstInput(e) {
        let operatorNotFound = true;
        if (e.target.name === "firstInput") {
            let value = this.firstInputRef.current.value.replace(/\D+/g, '');
            this.setState({firstInput: value});
            if (/[0-9]{2}/.test(value)) {
                for (let i of allOperators) {
                    if (checkCode(i.codes, value)) {
                        this.setState({operator: i.cellOperator});
                        operatorNotFound = false;
                    }
                }
                if (operatorNotFound) {
                    this.setState({operator: "Unknown"});
                }
                this.secondInputRef.current.focus()
            } else {
                this.setState({operator: ""});
            }
        }
    }

    changeOfSecondInput(e) {
        if (e.target.name === "secondInput") {
            let value = this.secondInputRef.current.value.replace(/\D+/g, '');
            this.setState({secondInput: value});
            if (this.state.operator.length > 0) {
                if (/[0-9]{7}/.test(value)) {
                    this.setState({sign: "✔️"});
                } else {
                    this.setState({sign: " - "});
                }
            } else {
                this.setState({sign: " - "});
            }
        }
    }

    render() {
        return <div>
            <span data-testid="operator-name">{this.state.operator}</span>
            <span>+38 0</span>
            <input
                type="text"
                name="firstInput"
                data-testid="operator-input"
                value={this.state.firstInput}
                onInput={this.changeOfFirstInput}
                ref={this.firstInputRef}
            />

            <span data-testid="check-icon">{this.state.sign}</span>
            <input type="text"
                   data-testid="phone-input"
                   name="secondInput"
                   value={this.state.secondInput}
                   onInput={this.changeOfSecondInput}
                   ref={this.secondInputRef}
            />
        </div>;
    }
}

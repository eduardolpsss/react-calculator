import React, { Component } from "react";
import './Calculator.css';

import Button from "./Components/Button";
import Display from "./Components/Display";

// Defining calculator initial Values
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component {
    state = {...initialState}

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    // Calculator functions:

    // Clear calculator cache
    clearMemory(){
        this.setState({...initialState})
    }

    // Set calculator operation based on the digit pressed
    setOperation(operation){
        if (this.state.current === 0) {
            this.setState({operation, current: 1, clearDisplay: true})
        } else {
            // Defining functionality of the '=' in the calculator
            const equals = operation === '='
            // Instantiating a variable to store the current operation (in case there is more than one operation)
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            try {
                // Using the eval function to work with operations
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory()                    
                    return
                }
            } catch (e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values

            })

        }
    }

    // Add a digit to compose the operation
    addDigit(number){
        // Checking for a "." in the calculator display, preventing entry of more than one per value
        if (number === '.' && this.state.displayValue.includes('.')) {
            return 
        }

        // Creating rules for the display wipe button
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + number

        this.setState({displayValue, clearDisplay: false})

        // Passing typed values (string) to the float type and storing in the array values
        if(number !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }

    render() {

        return(
            <div className="calculator">
            <Display value={this.state.displayValue}></Display>
            <Button label="AC" click={this.clearMemory} triple/>
            <Button label="/" click={this.setOperation} operation/>
            <Button label="7" click={this.addDigit}/>
            <Button label="8" click={this.addDigit}/>
            <Button label="9" click={this.addDigit}/>
            <Button label="*" click={this.setOperation} operation/>
            <Button label="4" click={this.addDigit}/>
            <Button label="5" click={this.addDigit}/>
            <Button label="6" click={this.addDigit}/>
            <Button label="-" click={this.setOperation} operation/>
            <Button label="1" click={this.addDigit}/>
            <Button label="2" click={this.addDigit}/>
            <Button label="3" click={this.addDigit}/>
            <Button label="+" click={this.setOperation} operation/>
            <Button label="0" click={this.addDigit} double/>
            <Button label="." click={this.addDigit}/>
            <Button label="=" click={this.setOperation} operation/>
        </div>
        )
    }
}
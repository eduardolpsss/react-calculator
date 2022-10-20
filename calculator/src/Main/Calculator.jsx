import React, { Component } from "react";
import './Calculator.css';

import Button from "../fonts/components/Button";
import Display from "./Display";

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
        console.log(operation)
    }

    // Add a digit to compose the operation
    addDigit(number){
        // Checking for a "." in the calculator display, preventing entry of more than one per value
        // if (n === '.' && this.state.displayValue.includes('.')) {
        //     return 
        // }

        const clearDisplay = this.state.displayValue === '0'
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
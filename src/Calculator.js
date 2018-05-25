import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
    state = {
        displayValue: '0',
        waitingForOperand: false,
        operator: null
    }

    inputDigit(digit) {
        const { displayValue, waitingForOperand } = this.state

        if (waitingForOperand) {
            this.setState({
                displayValue: String(digit),
                waitingForOperand: false
            })
        } else {
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit
            })
        }
    }

    inputDot() {
        const { displayValue, waitingForOperand } = this.state

        if (waitingForOperand) {
            this.setState ({
                displayValue: '.',
                waitingForOperand: false
            })
        } else if (displayValue.indexOf('.') === -1) {
            this.setState({
                displayValue: displayValue + '.',
                waitingForOperand: false
            })
        }
    }

    clearDisplay() {
        this.setState({
            displayValue: '0'
        })
    }

    toggleSign() {
        const { displayValue } = this.state
        this.setState({
            displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : "-" + displayValue
        })
    }

    inputPercent() {
        const { displayValue } = this.state
        const value = parseFloat(displayValue)
        this.setState({
            displayValue: String(value / 100) 
        })
    }

    performOperation(operator) {
        const { displayValue } = this.state
        this.setState({
            waitingForOperand: true,
            operator: operator
        })
        
    }


    render() {
        const { displayValue } = this.state;
      return (
          <div className="calculator">
            <div className="display">{ displayValue }</div>
            <div className="buttons">
              <div className="button top" onClick={() => this.clearDisplay()}>AC</div>
              <div className="button top" onClick={() => this.toggleSign()}>±</div>
              <div className="button top" onClick={() => this.inputPercent()}>%</div>
              <div className="button right" onClick={() => this.performOperation('/')}>÷</div>
              <div className="button classic" onClick={() => this.inputDigit(7)}>7</div>
              <div className="button classic" onClick={() => this.inputDigit(8)}>8</div>
              <div className="button classic" onClick={() => this.inputDigit(9)}>9</div>
              <div className="button right" onClick={() => this.performOperation('x')}>×</div>
              <div className="button classic" onClick={() => this.inputDigit(4)}>4</div>
              <div className="button classic" onClick={() => this.inputDigit(5)}>5</div>
              <div className="button classic" onClick={() => this.inputDigit(6)}>6</div>
              <div className="button right" onClick={() => this.performOperation('-')}>–</div>
              <div className="button classic" onClick={() => this.inputDigit(1)}>1</div>
              <div className="button classic" onClick={() => this.inputDigit(2)}>2</div>
              <div className="button classic" onClick={() => this.inputDigit(3)}>3</div>
              <div className="button right" onClick={() => this.performOperation('+')}>+</div>
              <div className="button classic zero" onClick={() => this.inputDigit(0)}>0</div>
              <div className="button classic" onClick={() => this.inputDot()}>.</div>
              <div className="button right" onClick={() => this.performOperation('=')}>=</div>
            </div>
          </div>
      );
    }
  }
  
  export default Calculator;
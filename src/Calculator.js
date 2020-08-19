import React from 'react'
import NumberInput from './NumberInput'
import OperatorSelect from './OperatorSelect'
import Equal from './Equal.js'
import SolveEquation from './SolveEquation'
import ErrorMessage from './ErrorMessage'
import './Input.css'

class Calculator extends React.Component {
    constructor (props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleOperatorChange = this.handleOperatorChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.state = {inputOne: '', operator: '+', inputTwo: '', answer: '', errorMessage: ''}
    }

    handleInputChange(input, id) {
      id === "1" ? this.setState ({
        inputOne: input
      }) : this.setState({
        inputTwo: input
      })
    }

    handleOperatorChange(operator) {
      this.setState({operator})
    }

    handleClick() {
      let inputA=parseInt(this.state.inputOne)
      let inputB=parseInt(this.state.inputTwo)
      let op=this.state.operator
      let answ = 0;
      if (isNaN(inputA) || isNaN(inputB)) {
        this.setState({answer: ''})
        this.setState({errorMessage: 'Please provide a valid number for both operands'})
      } else {
        switch (op) {
          case '+':
            answ = inputA + inputB
          break;
          case '-':
            answ = inputA - inputB
          break;
          case '*':
            answ = inputA * inputB
          break;
           case '/':
            answ = inputA / inputB
          break;
          default:
        }
      this.setState({answer: answ})
      this.setState({errorMessage: ''})
    }
  }

    render () {
      const inputOne=this.state.inputOne;
      const inputTwo=this.state.inputTwo;
        return (
            <div>
              <fieldset>
                <NumberInput id = "1" value={inputOne}
                onInputChange={this.handleInputChange}/>
                <OperatorSelect 
                onOperatorChange={this.handleOperatorChange}/>
                <NumberInput id = "2" value={inputTwo}
                onInputChange={this.handleInputChange}/>
                <button type="button" onClick={this.handleClick}>=</button>
                <SolveEquation 
                answer = {this.state.answer}
                />
                </fieldset>
                <ErrorMessage
                message = {this.state.errorMessage}
                />
            </div>
        )
    }

}

export default Calculator
import React from 'react'
import NumberInput from './NumberInput'
import OperatorSelect from './OperatorSelect'
import Equal from './Equal.js'
import SolveEquation from './SolveEquation'
import './Input.css'

class Calculator extends React.Component {
    constructor (props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleOperatorChange = this.handleOperatorChange.bind(this);
      this.state = {inputOne: '', operator: '+', inputTwo: '', answer: ''}
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

    render () {
      const inputOne=this.state.inputOne;
      const inputTwo=this.state.inputTwo;
        return (
            <div>
                <NumberInput id = "1" value={inputOne}
                onInputChange={this.handleInputChange}/>
                <OperatorSelect 
                onOperatorChange={this.handleOperatorChange}/>
                <NumberInput id = "2" value={inputTwo}
                onInputChange={this.handleInputChange}/>
                <Equal />
                <SolveEquation 
                answer = {this.state.answer}
                />
            </div>
        )
    }

}

export default Calculator
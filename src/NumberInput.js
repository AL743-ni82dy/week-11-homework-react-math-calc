import React from 'react'
import './Input.css'

class NumberInput extends React.Component {
    constructor (props) {
        super(props);
        this.inputChange=this.inputChange.bind(this);
    }
    inputChange(input) {
        this.props.onInputChange(input.target.value,this.props.id);
    }
    render () {
        return (
            <input className="rectangle" 
            onChange={this.inputChange}/>
        )
    }
}

export default NumberInput

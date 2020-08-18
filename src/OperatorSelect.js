import React from 'react'
import './Input.css'

class OperatorSelect extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onOperatorChange(e.target.value)
    }
    render () {
        return (
            <select className="operator" 
            onChange={this.handleChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
        )
    }
}

export default OperatorSelect

import React from 'react'
import './Input.css'

class NumberInputOne extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onInputOneChange(e.target.value);
    }
    render () {
        return (
            <input className="rectangle" 
            onChange={this.handleChange}/>
        )
    }
}

export default NumberInputOne

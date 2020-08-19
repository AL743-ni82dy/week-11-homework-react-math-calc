import React from 'react'
import './Input.css'

class Equal extends React.Component {
    constructor(props) {
        super(props)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick() {
        this.setState({answer: 3})
        alert('button click')
    }
    render () {
        return (
            <div>
                <button type="button" onClick={this.handleButtonClick}>=</button>
            </div>
        )
    }
}

export default Equal;
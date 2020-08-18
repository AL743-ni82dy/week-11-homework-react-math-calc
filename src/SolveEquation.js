import React from 'react'

class SolveEquation extends React.Component {
    render () {
        const newAnswer=this.props.answer
       return (
            <div className="operator">{newAnswer}</div>
        )
    }
}
       

export default SolveEquation

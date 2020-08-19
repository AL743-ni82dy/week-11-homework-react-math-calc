import React from 'react'

class ErrorMessage extends React.Component {
    render () {
        const message=this.props.message
       return ( 
            <div className='errmsg' >{message}</div>
        )
    }
}
       

export default ErrorMessage

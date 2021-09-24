import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div style={{textAlign:'center'}}>
        <h1>
            Mailburst!
        </h1>
        Collect feedback form your users
        <br/>
        <h6>Send Bulk email to users using SendGrid</h6>
        <Link to="/surveys">Go to Dashboard to create a survey</Link>
        </div>
    )
}

export default Landing

import React from 'react'
import {Link} from '@reach/router'


const MainNav = props => {
    return (
        <div className="mainNav-container">
            <nav>
                <Link to="/register"> register</Link>
                <Link to="/login"> login</Link>
            </nav>

            

            
        </div>
    )
}


export default MainNav

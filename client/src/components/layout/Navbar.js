import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({title, icon}) => {
    return ( 
    <div className='navbar bg-primary'>
        <h1>
            <i className={icon}/>{title}
        </h1>
        <ul>

                        <li>
                            <Link to='/'>Home</Link> 
                        </li>
                        <li>
                            <Link to='/about'>About</Link>  
                        </li>
                        <li>
                            <Link to='/register'>Register</Link> 
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>  
                        </li>
                    </ul>
                    
                        </div> 
    );
}

Navbar.propTypes = {
    title: Proptypes.string.isRequired,
    icon: Proptypes.string,
}

Navbar.defaultProps = {
    title:  ' Log-Box',
    icon: 'fa fa-id-card-alt'
}
 
export default Navbar;
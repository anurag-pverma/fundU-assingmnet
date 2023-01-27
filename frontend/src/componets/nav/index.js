import React from "react";
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux"
import {LOGOUT} from "../../redux/const/actionsTypes"

function Nav(props) {
    const dispatch = useDispatch();
    const [authenticated,
        setAuthenticated] = useState(false)

    useEffect(() => {
        if (props.auth.authData) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }
    }, [props.auth])

    function handleLogOut(e) {
        e.preventDefault()

        dispatch({type: LOGOUT})
    }
    return (
        <nav >
            <div>
                <h3>Navbar</h3>
            </div>
            <div>
                {authenticated ?
                 <div >
                 <i class="fa-solid fa-user"></i>
                 <div>
                     <span className="d-blcok">Account</span>
                     <div >
                         <Link  to="/account/profile">Profile</Link>
                         <span >or</span>
                         <Link onClick={handleLogOut}  to="/">Logout</Link>
                     </div>
                 
                 </div>
             </div>
                 : 
                 <div >
                 <i class="fa-solid fa-user"></i>
                 <div>
                     <span className="d-blcok">Account</span>
                     <div >
                         <Link  to="/account/login">Login</Link>
                         <span >or</span>
                         <Link to="account/signup">Singup</Link>
                     </div>
                 
                 </div>
             </div>
                }
              
            </div>

        </nav>
    )
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps)(Nav);
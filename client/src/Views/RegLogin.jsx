import {Router} from "@reach/router"
import Login from "../components/Login";
import MainNav from "../components/MainNav";
import Registration from "../components/Registration";



const RegLogin = props => {
    return (
        <div className="regLogin-container">


    <MainNav/>
      <Router>
          <Registration path="register"/>
          <Login path="login"/>
      </Router>

            
        </div>
    )
}


export default RegLogin

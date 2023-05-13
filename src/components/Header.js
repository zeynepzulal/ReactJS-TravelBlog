
import logo from "../images/logo.svg"
import "./styles/Header.css"

function Header(){
    return(
        <header>
            <div className ="logo-container">

            <img src={logo} />
            <h1>my travel journal.</h1>
            </div>
            
        </header>
    )



}
export default Header;
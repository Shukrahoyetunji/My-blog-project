import Burger from './burger';
import logo from './logo.png';



const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} className="App-logo" alt="logo" />
            <Burger/>
            
                       
        </nav> 
       
    );
}
 
export default NavBar;
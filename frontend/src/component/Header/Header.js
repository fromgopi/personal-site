import "./header.css";
import logo from '../../assets/icons/elephant.png';

function Header() { 
    return(
        <div className="header">
            <div className="header-div-inner">
                    <a className="logo">
                        <img className="logo-img" src={logo}/>
                    </a>
            </div>
        </div>
    );
}

export default Header;
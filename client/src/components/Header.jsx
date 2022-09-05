import logo from './assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';


export default function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header-menu">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}